"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VolumeX, Volume } from "lucide-react";

interface ProjectVideoProps {
  src: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const ProjectVideo = ({
  src,
  width = "400px",
  height = "250px",
  className,
}: ProjectVideoProps) => {
  const [hovered, setHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [clicked, setClicked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    setClicked(true);
    setIsMuted(!isMuted);
    videoRef.current.muted = !videoRef.current.muted;

    setTimeout(() => setClicked(false), 150);
  };

  return (
    <div
      className={`relative rounded-3xl overflow-hidden cursor-pointer ${className}`}
      style={{ width, height, maxWidth: "100%", maxHeight: "100%" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggleMute}
    >
      <motion.video
        ref={videoRef}
        src={src}
        muted={isMuted}
        loop
        autoPlay
        playsInline
        className="w-full h-full object-cover rounded-3xl"
        animate={{ scale: clicked ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black rounded-3xl flex justify-center items-center pointer-events-none"
          >
            {isMuted ? <VolumeX size={32} className="text-white" /> : <Volume size={32} className="text-white" />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};