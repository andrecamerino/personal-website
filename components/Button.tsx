"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

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
  const { currentTheme } = useTheme();

  const isDark = currentTheme === "dark";

  const variantClasses = {
    primary: `
      bg-(--color-primary) text-(--color-secondary) border border-transparent
    `,
    secondary: `
      bg-transparent text-(--color-primary) border border-(--color-primary)
    `,
  };

  // 👇 Theme-based hover effect
  const hoverAndActiveEffect = isDark
  ? `
    hover:shadow-[0_0_10px_2px_var(--color-primary),0_0_30px_8px_var(--color-primary)]
    active:shadow-[0_0_14px_4px_var(--color-primary),0_0_40px_12px_var(--color-primary)]
    active:brightness-110
  `
  : `
    hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]
    active:shadow-[0_4px_15px_rgba(0,0,0,2)]
    active:brightness-95
  `;

  const baseClasses = `
    inline-flex h-10 px-8 py-1 rounded-3xl
    items-center justify-center select-none
    text-sm font-semibold
    transition-all duration-300
    ${variantClasses[variant]}
    ${hoverAndActiveEffect}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
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