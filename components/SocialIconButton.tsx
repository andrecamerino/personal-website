"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";

interface SocialIconButtonProps {
  href: string;
  label: string;
  icon: IconType;
  size?: number;
  className?: string;
}

const SocialIconButton: React.FC<SocialIconButtonProps> = ({
  href,
  label,
  icon: Icon,
  size = 16,
  className = "",
}) => {
  const isInternal = href.startsWith("tel:") || href.startsWith("mailto:");

  return (
    <motion.a
      href={href}
      aria-label={label}
      {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
      whileHover={{ scale: 1.25, y: -3, opacity: 0.9 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 500, damping: 12 }}
      className={`inline-flex items-center justify-center rounded-full p-2 cursor-pointer text-(--color-primary) ${className}`}
    >
      <Icon size={size} />
    </motion.a>
  );
};

export default SocialIconButton;
