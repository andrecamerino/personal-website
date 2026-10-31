import React from "react";
import Button from "@/components/Button";
import { useMode } from "@/context/ModeContext";
import SectionTitle from "./SectionTitle";
import { RevealWrapper } from "./RevealWrapper";

const developerResume = "/resume/andre-developer-resume.pdf";
const creativeResume = null;

const ResumeSection = () => {
  const { isDev } = useMode();
  return (
    <div className="mt-60 lg:mt-80 flex flex-col items-center gap-6">
      <SectionTitle>Resume / CV</SectionTitle>
      <RevealWrapper>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-center">
          {developerResume && (
            <a href={developerResume} target="_blank">
              <Button
                className="group"
                variant={isDev ? "primary" : "secondary"}
              >
                View Developer Resume &nbsp;
                <span className="hidden group-hover:inline">🔋</span>
                <span className="inline group-hover:hidden">🪫</span>
              </Button>
            </a>
          )}
          {creativeResume && (
            <a href={creativeResume} target="_blank">
              <Button
                className="group"
                variant={isDev ? "secondary" : "primary"}
              >
                Download Creative Resume &nbsp;
                <span className="hidden group-hover:inline">📸</span>
                <span className="inline group-hover:hidden">📷</span>
              </Button>
            </a>
          )}
        </div>
      </RevealWrapper>
    </div>
  );
};

export default ResumeSection;
