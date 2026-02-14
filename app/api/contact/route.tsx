import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { ratelimit } from "@/utils/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: "Too many requests. Try again later.",
      }),
      { status: 429 },
    );
  }

  try {
    const body = await req.json();
    const { email, name, subject, kind, text, phone } = body;

    if (!email || !name || !subject || !text) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Missing required fields.",
        }),
        { status: 400 },
      );
    }

    const html = await render(
      <EmailTemplate
        name={name}
        kind={kind}
        text={text}
        phone={phone}
        email={email}
      />,
    );

    const data = await resend.emails.send({
      from: SENDER_EMAIL,
      to: RECEIVER_EMAIL,
      subject,
      html,
    });

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Email sent successfully!",
        details: data,
      }),
      { status: 200 },
    );
  } catch (err: unknown) {
    console.error("Resend error:", err);

    let message = "Something went wrong";
    if (err instanceof Error) message = err.message;
    else if (typeof err === "object" && err !== null)
      message = JSON.stringify(err);
    else if (typeof err === "string") message = err;

    return new Response(
      JSON.stringify({
        status: "error",
        message,
        details: err,
      }),
      { status: 500 },
    );
  }
}
