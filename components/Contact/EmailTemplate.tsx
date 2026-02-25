interface EmailTemplateProps {
  name: string;
  kind: string;
  text: string;
  email: string;
  phone?: string;
}

export function EmailTemplate({
  name,
  kind,
  text,
  phone,
  email,
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
            fontSize: "20px",
            marginBottom: "20px",
            color: "#111827",
          }}
        >
          📩 New Contact Request
        </h1>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "20px",
            color: "#374151",
          }}
        >
          <strong>{name}</strong> is interested in a{" "}
          <strong>{kind}</strong>.
        </p>

        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "15px",
            borderRadius: "6px",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>
            Contact Information
          </p>

          <p style={{ margin: "0 0 4px 0" }}>
            📧 <strong>Email:</strong> {email}
          </p>

          {phone && (
            <p style={{ margin: 0 }}>
              📞 <strong>Phone:</strong> {phone}
            </p>
          )}
        </div>

        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            paddingTop: "20px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Message
          </p>

          <p
            style={{
              lineHeight: "1.6",
              color: "#374151",
              whiteSpace: "pre-line",
            }}
          >
            {text}
          </p>
        </div>

        <p
          style={{
            marginTop: "30px",
            fontSize: "12px",
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          This email was sent from your portfolio contact form.
        </p>
      </div>
    </div>
  );
}