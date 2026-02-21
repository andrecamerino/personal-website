"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiFullscreen } from "react-icons/bi";

interface ProjectMediaProps {
  images?: string[];
  video?: string;
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const ProjectThumbnail = ({
  images,
  video,
  alt = "",
  className,
  width = "400px",
  height = "250px",
}: ProjectMediaProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(-1);
  const [hovered, setHovered] = useState(false);

  // Auto-rotate images every 6s
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(-1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  const wrapperStyle = { width, height, maxWidth: "100%", maxHeight: "100%" };

  return (
    <div
      className={`relative cursor-pointer ${className}`}
      style={wrapperStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {video ? (
        <video
          src={`/projects${video}`}
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-full object-cover rounded-3xl"
        />
      ) : images && images.length > 0 ? (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={`/projects${images[currentIndex]}`}
            alt={alt}
            initial={{ opacity: 0, x: direction * 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 20 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full object-cover rounded-3xl"
          />
        </AnimatePresence>
      ) : null}

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-3xl flex items-center justify-center bg-black/20 backdrop-blur-[1px]"
          >
            <BiFullscreen size={40} className="text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
