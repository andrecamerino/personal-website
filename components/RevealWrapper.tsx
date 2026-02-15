"use client";

import { ReactNode, use } from "react";
import { motion, TargetAndTransition, Transition } from "motion/react";
import { useTheme } from "@/context/ThemeContext";

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
  initial?: TargetAndTransition;
  whileInView?: TargetAndTransition;
  transition?: Transition;
  delay?: number;
}

const RevealWrapper: React.FC<RevealWrapperProps> = ({
  children,
  className,
  initial = { opacity: 0, y: 50, scale: 0.95 },
  whileInView = { opacity: 1, y: 0, scale: 1 },
  transition = { type: "spring", stiffness: 60, damping: 12 },
  delay = 0,
}) => {
  const { currentTheme } = useTheme();
  return (
    <motion.div
      key={currentTheme}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;
