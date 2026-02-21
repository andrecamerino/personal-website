"use client";

import { FullscreenPopup } from "@/components/Testimonials/FullscreenPopup";
import {
  createContext,
  ReactElement,
  ReactNode,
  useState,
  useContext,
} from "react";

type Status = "active" | "inactive";

interface FullscreenContextType {
  currentStatus: Status;
  setCurrentStatus: (status: Status) => void;
  currentContent: ReactElement | null;
  setContent: (content: ReactElement) => void;
}

const FullscreenContext = createContext<FullscreenContextType | undefined>(
  undefined,
);

export const FullscreenProvider = ({ children }: { children: ReactNode }) => {
  const [currentStatus, setCurrentStatus] = useState<Status>("inactive");
  const [currentContent, setCurrentContent] = useState<ReactElement | null>(
    null,
  );

  const setNewContent = (content: ReactElement) => {
    setCurrentStatus("active");
    setCurrentContent(content);
  };

  return (
    <FullscreenContext.Provider
      value={{
        currentStatus,
        setCurrentStatus,
        currentContent,
        setContent: setNewContent,
      }}
    >
      <FullscreenPopup />
      {children}
    </FullscreenContext.Provider>
  );
};

export const useFullscreen = () => {
  const ctx = useContext(FullscreenContext);
  if (!ctx)
    throw new Error("useFullscreen must be used within a FullscreenProvider");
  return ctx;
};
