"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ParallaxWrapperProps {
  background: string;
  children: React.ReactNode;
  speed?: number;
  fadeDuration?: number;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  background,
  children,
  speed = 0.3,
  fadeDuration = 0.5,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed]);

  // Two-layer stack for fade
  const [bgLayers, setBgLayers] = useState([background, background]);
  const [layerIndex, setLayerIndex] = useState(0); // 0 or 1

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
          transition={{ duration: fadeDuration }}
        />
      ))}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;