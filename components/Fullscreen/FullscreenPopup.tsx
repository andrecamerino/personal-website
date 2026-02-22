"use client";

import { useFullscreen } from "@/context/FullscreenContext";
import { glass } from "@/styles/glass";
import XIcon from "../AnimatedIcons/XIcon";
import { motion } from "framer-motion";

export const FullscreenPopup = () => {
  const { currentStatus, setCurrentStatus, currentContent } = useFullscreen();

  if (currentStatus !== "active") return null; // only show when active

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-(--color-primary)/30 backdrop-blur-sm"
      onClick={() => setCurrentStatus("inactive")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.3,
      }}
    >
      <motion.div
        className={`${glass} relative w-11/12 lg:max-w-6xl lg:max-h-[90vh] bg-(--color-secondary)/40 rounded-3xl p-3 pt-10 lg:p-10 lg:pt-20 overflow-auto`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          duration: 0.3,
        }}
      >
        {currentContent || "Popup content"}

        <button
          className="absolute top-4 right-4 lg:top-10 lg:right-10 text-(--color-white)"
          onClick={() => setCurrentStatus("inactive")}
        >
          <XIcon strokeWidth={4} className="text-(--color-primary)"/>
        </button>
      </motion.div>
    </motion.div>
  );
};
