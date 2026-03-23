import { EmailTemplate } from "@/components/Contact/EmailTemplate";
import { ConfirmationEmail } from "@/components/Contact/ConfirmationEmail";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { isRateLimited } from "./isRateLimited";
import { emailContentProps } from "@/types/emailContent";

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.SENDER_EMAIL as string;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL as string;

if (!SENDER_EMAIL || !RECEIVER_EMAIL) {
  throw new Error("Missing env email vars");
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Too many requests. Please wait a minute.",
        }),
        { status: 429 },
      );
    }

    const body = await req.json();
    const { email, name, subject, kind, text, phone } = body;
    const emailContent: emailContentProps = {
      email,
      name,
      subject,
      kind,
      text,
      phone,
    };

    if (
      !emailContent.email ||
      !emailContent.name ||
      !emailContent.subject ||
      !emailContent.text
    ) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Missing required fields.",
        }),
        { status: 400 },
      );
    }

    const { adminHtml, confirmationHtml } = await renderEmails(emailContent);
    const adminRes = await sendAdminEmail(emailContent, adminHtml);
    const clientRes = await sendConfirmationEmail(
      emailContent,
      confirmationHtml,
    );

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Email sent successfully!",
        id: adminRes.data?.id,
      }),
      { status: 200 },
    );
  } catch (err: unknown) {
    console.error("Error:", err);

    if (
      typeof err === "object" &&
      err !== null &&
      "statusCode" in err &&
      (err).statusCode === 429
    ) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Rate limit exceeded. Please try again shortly.",
        }),
        { status: 429 },
      );
    }

    let message = "Something went wrong";

    if (err instanceof Error) message = err.message;
    else if (typeof err === "object" && err !== null)
      message = JSON.stringify(err);
    else if (typeof err === "string") message = err;

    return new Response(
      JSON.stringify({
        status: "error",
        message,
      }),
      { status: 500 },
    );
  }
}

const renderEmails = async (email: emailContentProps) => {
  const [adminHtml, confirmationHtml] = await Promise.all([
    render(
      <EmailTemplate
        name={email.name}
        kind={email.kind}
        text={email.text}
        phone={email.phone}
        email={email.email}
      />,
    ),
    render(
      <ConfirmationEmail
        name={email.name}
        kind={email.kind}
        text={email.text}
        phone={email.phone}
        email={email.email}
      />,
    ),
  ]);

  return { adminHtml, confirmationHtml };
};

const sendAdminEmail = async (
  emailContent: emailContentProps,
  adminHtml: string,
) => {
  const adminRes = await resend.emails.send({
    from: SENDER_EMAIL,
    to: RECEIVER_EMAIL,
    subject: emailContent.subject || `New enquiry from ${emailContent.name}`,
    html: adminHtml,
  });

  if (adminRes.error) {
    throw adminRes.error;
  }

  return adminRes;
};

const sendConfirmationEmail = async (
  emailContent: emailContentProps,
  confirmationHtml: string,
) => {
  const clientRes = await resend.emails.send({
    from: SENDER_EMAIL,
    to: emailContent.email,
    subject: "Thanks for reaching out 👋",
    html: confirmationHtml,
  });

  if (clientRes.error) {
    console.warn("Client email failed:", clientRes.error);
  }

  return clientRes;
};
