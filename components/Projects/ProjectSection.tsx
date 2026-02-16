"use client";

import { useState, useRef, useEffect } from "react";
import { projects, CreativeCategory } from "@/data/projects";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/Projects/ProjectCard";
import { useTheme } from "@/context/ThemeContext";
import { RevealWrapper } from "@/components/RevealWrapper";
import Button from "@/components/Button";
import { motion, AnimatePresence } from "motion/react";
import { glass } from "@/styles/glass";

const ProjectSection = () => {
  const { currentTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<CreativeCategory>("videography");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const currentProjects =
    currentTheme === "dark" ? projects.developer : projects.creative[activeTab];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tabs: CreativeCategory[] = ["videography", "photography", "editing"];

  return (
    <div
      id="next-section"
      className="flex flex-col justify-center items-center gap-10"
    >
      <SectionTitle>FEATURED PROJECTS</SectionTitle>

      {currentTheme === "light" && (
        <>
          {/* Mobile Custom Dropdown */}
          <div
            className="w-full max-w-xs lg:hidden flex flex-col justify-center relative"
            ref={wrapperRef}
          >
            <Button
              variant="primary"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex justify-between items-center px-4 py-2`}
            >
              <span className="capitalize">{activeTab}</span>
              <span
                className="ml-2 transform transition-transform duration-200"
                style={{ rotate: dropdownOpen ? "180deg" : "0deg" }}
              >
                🔽
              </span>
            </Button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={`${glass} backdrop-blur-[6px] absolute top-full left-0 right-0 mt-2 border rounded-3xl z-10 flex flex-col overflow-hidden`}
                >
                  {tabs.map((tab) => (
                    <div
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        setDropdownOpen(false);
                      }}
                      className={`flex justify-center px-8 py-2 cursor-pointer capitalize ${
                        activeTab === tab
                          ? "font-bold bg-(--color-primary) text-(--color-secondary)"
                          : ""
                      }`}
                    >
                      {tab}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex flex-row gap-2">
            <Button
              onClick={() => setActiveTab("videography")}
              variant={activeTab === "videography" ? "primary" : "secondary"}
            >
              Videography
            </Button>
            <Button
              onClick={() => setActiveTab("photography")}
              variant={activeTab === "photography" ? "primary" : "secondary"}
            >
              Photography
            </Button>
            <Button
              onClick={() => setActiveTab("editing")}
              variant={activeTab === "editing" ? "primary" : "secondary"}
            >
              Editing
            </Button>
          </div>
        </>
      )}

      {/* Project Cards */}
      {currentProjects.map((p, index) => (
        <RevealWrapper key={`${currentTheme}-${activeTab}-${p.title}`}>
          <ProjectCard project={p} reverse={index % 2 === 1} />
        </RevealWrapper>
      ))}
    </div>
  );
};

export default ProjectSection;
