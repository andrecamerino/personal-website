"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectVideo } from "./ProjectVideo";

interface ProjectMediaProps {
  images?: string[];
  video?: string;
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const ProjectMedia = ({
  images = ["/projects/lebron.webp", "/placeholders/cris.png"],
  video,
  alt = "",
  className,
  width = "400px",
  height = "250px",
}: ProjectMediaProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const [direction, setDirection] = useState<1 | -1>(-1); // reversed: -1 = forward, 1 = back
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate images every 6s
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setDirection(-1); // reversed
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images]);

  const prev = () => {
    setDirection(1); // reversed
    setCurrentIndex((prev) => (prev - 1 + images!.length) % images!.length);
  };
  const next = () => {
    setDirection(-1); // reversed
    setCurrentIndex((prev) => (prev + 1) % images!.length);
  };

  const wrapperStyle = { width, height, maxWidth: "100%", maxHeight: "100%" };
  const alwaysShow = isMobile;

  if (video) {
    return <ProjectVideo src={video} width={width} height={height} className={className} />;
  }

  if (images && images.length > 0) {
    return (
      <div className={`relative rounded-3xl overflow-hidden ${className}`} style={wrapperStyle}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={alt}
            initial={{ opacity: 0, x: direction * 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 20 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full object-cover rounded-3xl"
          />
        </AnimatePresence>

        {/* Left gradient + arrow */}
        <div
          className="absolute top-0 left-0 h-full w-24 cursor-pointer"
          onMouseEnter={() => setHoveredSide("left")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={prev}
        >
          {(hoveredSide === "left" || alwaysShow) && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 h-full w-full flex items-center justify-start pointer-events-none"
              style={{ background: "linear-gradient(to right, rgba(0,0,0,0.5), transparent)" }}
            >
              <ChevronLeft size={36} className="text-white ml-4 pointer-events-auto" />
            </motion.div>
          )}
        </div>

        {/* Right gradient + arrow */}
        <div
          className="absolute top-0 right-0 h-full w-24 cursor-pointer"
          onMouseEnter={() => setHoveredSide("right")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={next}
        >
          {(hoveredSide === "right" || alwaysShow) && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 right-0 h-full w-full flex items-center justify-end pointer-events-none"
              style={{ background: "linear-gradient(to left, rgba(0,0,0,0.5), transparent)" }}
            >
              <ChevronRight size={36} className="text-white mr-4 pointer-events-auto" />
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  return null;
};