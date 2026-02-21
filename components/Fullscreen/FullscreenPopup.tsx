"use client";

import { useFullscreen } from "@/context/FullscreenContext";

export const FullscreenPopup = () => {
  const { currentStatus, setCurrentStatus, currentContent } = useFullscreen();

  if (currentStatus !== "active") return null; // only show when active

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={() => setCurrentStatus("inactive")}
    >
      <div
        className="relative w-11/12 max-w-4xl max-h-[90vh] bg-white rounded-2xl p-4 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {currentContent || "Popup content"}

        <button
          className="absolute top-2 right-2 text-black text-3xl font-bold"
          onClick={() => setCurrentStatus("inactive")}
        >
          x
        </button>
      </div>
    </div>
  );
};
