"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/isMobile";

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number;
  fadeDuration?: number;
}

const SPEED = 10;
const FADE_DURATION = 0.4;

const ParallaxWrapper = ({ children }: ParallaxWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * SPEED]);
  const { currentTheme } = useTheme();
  
  let darkBackground: string, lightBackground: string;

  if (useIsMobile()) {
    darkBackground = "/backgrounds/sm-dark.jpg"
    lightBackground = "/backgrounds/sm-light.jpg"
  } else {
    darkBackground = "/backgrounds/lg-dark.jpg"
    lightBackground = "/backgrounds/lg-light.jpg"
  }

  const background = currentTheme == 'dark' ? darkBackground : lightBackground;

  // Two-layer stack for fade
  const [bgLayers, setBgLayers] = useState([background, background]);
  const [layerIndex, setLayerIndex] = useState<0 | 1>(0); // 0 or 1

  // Update the next layer safely using functional updater
  useEffect(() => {
    setLayerIndex((prev) => {
      const nextIndex = (prev + 1) % 2;
      setBgLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[nextIndex] = background;
        return newLayers;
      });
      return nextIndex;
    });
  }, [background]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {bgLayers.map((bg, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})`, y }}
          initial={{ opacity: index === layerIndex ? 0 : 1 }}
          animate={{ opacity: index === layerIndex ? 1 : 0 }}
          transition={{ duration: FADE_DURATION }}
        />
      ))}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;
