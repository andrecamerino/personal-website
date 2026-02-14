"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxWrapperProps {
  background: string; // URL of background image
  children: React.ReactNode;
  speed?: number; // 0.1 - 0.5 recommended
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  background,
  children,
  speed = 0.3,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({ target: ref });

  // Map scroll progress [0,1] → translateY value
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center will-change-transform"
        // Use background image
        style={{ backgroundImage: `url(${background})`, y }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;