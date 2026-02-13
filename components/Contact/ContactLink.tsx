import React, { useState } from "react";
import { FaCopy, FaRegCopy } from "react-icons/fa";

interface ContactLinkProps {
  title: string;
  text: string;
  isLink?: boolean;
  isPhone?: boolean;
  className?: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  title,
  text,
  isLink,
  isPhone,
  className,
}) => {
  const phoneNumber = "+640275314977";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(isPhone ? phoneNumber : text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`font-light flex flex-col gap-0 ${className}`}>
      <h1 className="font-bold">{title}</h1>
      <div className="flex gap-1">
        {isPhone ? (
          <a href={`tel:${phoneNumber}`} className="underline">
            {phoneNumber}
          </a>
        ) : isLink ? (
          <a href={text} target="_blank" className="underline">
            {text}
          </a>
        ) : (
          <p>{text}</p>
        )}
        <button
          onClick={handleCopy}
          className="text-current transition duration-200 ease-in-out hover:brightness-60"
          style={{ fontSize: "0.9em" }} // relative to text
        >
          {copied ? <FaCopy /> : <FaRegCopy />}
        </button>
      </div>
    </div>
  );
};

export default ContactLink;
