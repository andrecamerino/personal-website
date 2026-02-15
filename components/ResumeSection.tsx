import React from "react";
import Button from "@/components/Button";
import { useTheme } from "@/context/ThemeContext";
import SectionTitle from "./SectionTitle";
import { RevealWrapper } from "./RevealWrapper";

const ResumeSection = () => {
  const { currentTheme } = useTheme();
  return (
    <div className="mt-60 lg:mt-80 flex flex-col items-center gap-6">
      <SectionTitle>Resume / CV</SectionTitle>
      <RevealWrapper>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-center">
          <a href="/resume/andre-developer-resume.pdf" target="_blank">
            <Button
              className="group"
              variant={currentTheme === "light" ? "secondary" : "primary"}
            >
              Download Developer Resume &nbsp;
              <span className="hidden group-hover:inline">🔋</span>
              <span className="inline group-hover:hidden">🪫</span>
            </Button>
          </a>
          <a href="/resume/andre-creative-resume.pdf" target="_blank">
            <Button
              className="group"
              variant={currentTheme === "dark" ? "secondary" : "primary"}
            >
              Download Creative Resume &nbsp;
              <span className="hidden group-hover:inline">📸</span>
              <span className="inline group-hover:hidden">📷</span>
            </Button>
          </a>
        </div>
      </RevealWrapper>
    </div>
  );
};

export default ResumeSection;
