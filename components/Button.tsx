"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  link?: string;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  link,
  className = "",
  disabled = false,
}) => {
  const variantClasses = {
    primary: `
      bg-(--color-primary) text-(--color-secondary) border-1 border-transparent
    `,
    secondary: `
      bg-transparent text-(--color-primary) border-1 border-(--color-primary)
    `,
  };

  const baseClasses = `
    inline-flex h-10 px-8 py-1 rounded-3xl
    items-center justify-center select-none
    cursor-pointer transition-colors duration-100
    text-sm font-semibold
    ${variantClasses[variant]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) onClick();
  };

  if (link) {
    return (
      <Link href={link} className={baseClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <div className={baseClasses} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Button;
