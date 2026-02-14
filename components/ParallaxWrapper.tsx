"use client";

import React, { useEffect, useRef } from "react";

interface ParallaxWrapperProps {
  background: string; // URL of background image
  children: React.ReactNode;
  speed?: number; // 0.1 - 0.5 recommended
  fallbackColor?: string; // optional fallback color while loading
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  background,
  children,
  speed = 0.3,
  fallbackColor = "#111", // dark fallback by default
}) => {
  const bgRef = useRef<HTMLDivElement>(null);

  // Preload the background image to prevent white flashes
  useEffect(() => {
    const img = new Image();
    img.src = background;
  }, [background]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        // Use translate3d for GPU acceleration
        bgRef.current.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
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
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: fallbackColor,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;