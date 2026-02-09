"use client";

import React, { useEffect, useRef } from "react";

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
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;