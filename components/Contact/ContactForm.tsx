import React, { useState } from "react";
import { glass } from "@/styles/glass";
import Button from "../Button";
import { useTheme } from "@/context/ThemeContext";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { currentTheme } = useTheme();

  return (
    <form
      className={`${glass} w-full h-full rounded-3xl p-8 flex flex-col gap-4`}
    >
      {/* Name + Phone */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            className="py-2 px-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-current"
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Andre Camerino"
          />
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="phone" className="font-medium">
            Phone*
          </label>
          <input
            className="py-2 px-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-current"
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. +64 27 531 4977"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          className="py-2 px-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-current"
          id="email"
          name="email"
          type="email"
          placeholder="e.g. camerinoandre@gmail.com"
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col">
        <label htmlFor="subject" className="font-medium">
          Subject
        </label>
        <input
          className="py-2 px-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-current"
          id="subject"
          name="subject"
          type="text"
          placeholder={
            currentTheme === "dark"
              ? "e.g. Software Inquiry"
              : "e.g. Creative Inquiry"
          }
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="font-medium">
          Your Message
        </label>
        <textarea
          className="
            py-2 px-3 border rounded-xl 
            min-h-30
            resize-y 
            focus:outline-none focus:ring-2 focus:ring-current
          "
          id="message"
          name="message"
          placeholder={
            currentTheme === "dark"
              ? "Describe your upcoming project or idea..."
              : "What would you like to bring to life?"
          }
        />
      </div>

      {/* Status + Button Row */}
      <div className="flex items-center justify-between mt-2 min-h-7">
        {/* Status message (hidden unless needed) */}
        <div className="text-sm font-medium">
          {status === "success" && (
            <span className="text-green-500">Message sent successfully ✓</span>
          )}
          {status === "error" && (
            <span className="text-red-500">
              Something went wrong. Try again.
            </span>
          )}
        </div>

        <button type="submit">
          <Button className="group">
            Submit&nbsp;<span className="hidden group-hover:block"> 📬</span>
            <span className="block group-hover:hidden"> 📭</span>
          </Button>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
