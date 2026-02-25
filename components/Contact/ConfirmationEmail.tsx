import { emailText } from "@/data/emailText";
import { getRandomListItem } from "@/utils/getRandomListItem";

interface EmailTemplateProps {
  name: string;
  kind: string;
  text: string;
  email: string;
  phone?: string;
}

export function ConfirmationEmail({
  name,
  kind,
  text,
  email,
  phone,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f7",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "30px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            fontSize: "22px",
            marginBottom: "20px",
            color: "#111827",
          }}
        >
          Thanks for reaching out 👋
        </h1>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "16px",
            color: "#374151",
          }}
        >
          {getRandomListItem(emailText.greeting)} {name}!
        </p>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "20px",
            color: "#374151",
            lineHeight: "1.6",
          }}
        >
          {getRandomListItem(emailText.received)} <strong>{kind}</strong> enquiry.  
          {" " + getRandomListItem(emailText.copy)}:
        </p>

        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "20px",
            borderRadius: "6px",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>
            Your Details
          </p>

          <p style={{ margin: "0 0 6px 0" }}>
            <strong>Name:</strong> {name}
          </p>

          <p style={{ margin: "0 0 6px 0" }}>
            <strong>Email:</strong> {email}
          </p>

          {phone && (
            <p style={{ margin: "0 0 6px 0" }}>
              <strong>Phone:</strong> {phone}
            </p>
          )}

          <p style={{ margin: "0 0 12px 0" }}>
            <strong>Enquiry Type:</strong> {kind}
          </p>

          <div
            style={{
              borderTop: "1px solid #e5e7eb",
              paddingTop: "12px",
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
              Message
            </p>

            <p
              style={{
                margin: 0,
                whiteSpace: "pre-line",
                lineHeight: "1.6",
                color: "#374151",
              }}
            >
              {text}
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "16px",
            color: "#374151",
            lineHeight: "1.6",
          }}
        >
          I’ll get back to you as soon as possible, usually within 24–48 hours.
        </p>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "24px",
            color: "#374151",
          }}
        >
          {getRandomListItem(emailText.closings)},  
          <br />
          <strong>Andre Camerino</strong>
        </p>

        <p
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          This is an automated confirmation email from my portfolio website.
        </p>
      </div>
    </div>
  );
}