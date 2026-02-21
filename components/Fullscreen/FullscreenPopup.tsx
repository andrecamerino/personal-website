"use client";

import { useFullscreen } from "@/context/FullscreenContext";
import { glass } from "@/styles/glass";
import XIcon from "../AnimatedIcons/XIcon";

export const FullscreenPopup = () => {
  const { currentStatus, setCurrentStatus, currentContent } = useFullscreen();

  if (currentStatus !== "active") return null; // only show when active

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'
      onClick={() => setCurrentStatus("inactive")}
    >
      <div
        className={`${glass} relative w-11/12 lg:max-w-6xl lg:max-h-[90vh] rounded-3xl p-10 overflow-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {currentContent || "Popup content"}

        <button
          className="absolute top-10 right-10 text-(--color-white)"
          onClick={() => setCurrentStatus("inactive")}
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};
