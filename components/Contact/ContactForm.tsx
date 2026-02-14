import React, { useState, useRef } from "react";
import { glass } from "@/styles/glass";
import Button from "../Button";
import { useTheme } from "@/context/ThemeContext";
import { ApiResponse, Status, FieldErrors } from "@/types/contact";
import FormInput from "./FormInput";

const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  const { currentTheme } = useTheme();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setFieldErrors({});
    setApiMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      text: String(formData.get("text") ?? ""),
      kind: currentTheme === "dark" ? "developer" : "creative",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ApiResponse = await res.json();

      if (result.status === "error") {
        setStatus("error");
        setApiMessage(result.message || "Something went wrong.");

        if (Array.isArray(result.details)) {
          const errors: FieldErrors = {};
          for (const err of result.details) {
            if (
              err &&
              typeof err === "object" &&
              "path" in err &&
              "message" in err
            ) {
              const path = Array.isArray(err.path) ? err.path[0] : undefined;
              if (path) errors[path] = String(err.message);
            }
          }
          setFieldErrors(errors);
        }
      } else {
        setStatus("success");
        setApiMessage(result.message || "Message sent successfully!");
        formRef.current?.reset();
      }
    } catch (err: unknown) {
      setStatus("error");

      if (err instanceof Error) {
        setApiMessage(err.message);
      } else {
        setApiMessage("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`${glass} w-full h-full rounded-3xl p-8 flex flex-col gap-4`}
    >
      {/* Name + Phone */}
      <div className="flex flex-col lg:flex-row gap-4">
        <FormInput
          id="name"
          label="Name*"
          type="text"
          placeholder="e.g. Andre Camerino"
          required
          error={fieldErrors["name"]}
        />

        <FormInput
          id="phone"
          label="Phone"
          type="tel"
          placeholder="e.g. +64 27 531 4977"
          error={fieldErrors["phone"]}
        />
      </div>

      {/* Email */}
      <FormInput
        id="email"
        label="Email*"
        type="email"
        placeholder="e.g. camerinoandre@gmail.com"
        required
        error={fieldErrors["email"]}
      />

      {/* Subject */}
      <FormInput
        id="subject"
        label="Subject*"
        type="text"
        placeholder={
          currentTheme === "dark"
            ? "e.g. Software Inquiry"
            : "e.g. Creative Inquiry"
        }
        required
        error={fieldErrors["subject"]}
      />

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="text" className="font-medium">
          Your Message*
        </label>
        <textarea
          id="text"
          name="text"
          required
          placeholder={
            currentTheme === "dark"
              ? "Describe your upcoming project or idea..."
              : "What would you like to bring to life?"
          }
          className={`py-2 px-3 border rounded-xl min-h-30 resize-y focus:outline-none focus:ring-2 focus:ring-current ${
            fieldErrors["text"] ? "border-red-500" : ""
          }`}
        />
        {fieldErrors["text"] && (
          <span className="text-red-500 text-sm mt-1">
            {fieldErrors["text"]}
          </span>
        )}
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between mt-2 min-h-7">
        {apiMessage && (
          <div className="text-sm font-medium mb-2">
            <span
              className={
                status === "success" ? "text-green-500" : "text-red-500"
              }
            >
              {apiMessage}
            </span>
          </div>
        )}

        <button type="submit" disabled={loading}>
          <Button className="group">
            {loading ? "Sending..." : "Submit"}&nbsp;
            <span className="hidden group-hover:block">📬</span>
            <span className="block group-hover:hidden">📭</span>
          </Button>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;