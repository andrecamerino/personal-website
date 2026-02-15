"use client";

import { ReactNode } from "react";
import { motion, TargetAndTransition, Transition } from "motion/react";

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
  transition = { type: "spring", stiffness: 60, damping: 12 }, // softer, smoother spring
  delay = 0,
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.15 }} // trigger when 15% visible
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;