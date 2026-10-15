"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiFullscreen } from "react-icons/bi";
import ProjectImage from "./ProjectImage";
import { getPoster } from "@/utils/projectMedia";

const SIZES = "400px";

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
  // Indexes of images that have finished loading, so rotation never lands on a blank one
  const loadedIndexes = useRef(new Set<number>());

  const nextIndex = images && images.length > 1 ? (currentIndex + 1) % images.length : null;
  const poster = video ? getPoster(video) : undefined;

  // Auto-rotate images every 6s, skipping a tick if the next image isn't loaded yet
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(-1);
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        return loadedIndexes.current.has(next) ? next : prev;
      });
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
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {/* Poster (or shimmer) shows through until the video has a frame to paint */}
          {poster ? (
            <ProjectImage src={poster} alt={alt} sizes={SIZES} />
          ) : (
            <div aria-hidden className="absolute inset-0 shimmer" />
          )}
          <video
            src={`/projects${video}`}
            muted
            loop
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ) : images && images.length > 0 ? (
        <>
          {/* Preload the next image underneath, invisible */}
          {nextIndex !== null && (
            <ProjectImage
              key={`preload-${nextIndex}`}
              src={images[nextIndex]}
              alt=""
              sizes={SIZES}
              className="opacity-0 pointer-events-none"
              onLoad={() => loadedIndexes.current.add(nextIndex)}
            />
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 rounded-3xl overflow-hidden"
            >
              <ProjectImage
                src={images[currentIndex]}
                alt={alt}
                sizes={SIZES}
                onLoad={() => loadedIndexes.current.add(currentIndex)}
              />
            </motion.div>
          </AnimatePresence>
        </>
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
