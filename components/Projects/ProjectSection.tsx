"use client";

import { useState } from "react";
import { projects, CreativeCategory } from "@/data/projects";
import SectionTitle from "../SectionTitle";
import ProjectCard from "./ProjectCard";
import { useTheme } from "@/context/ThemeContext";
import { RevealWrapper } from "../RevealWrapper";
import Button from "../Button";

const ProjectSection = () => {
  const { currentTheme } = useTheme();

  const [activeTab, setActiveTab] = useState<CreativeCategory>("videography");

  const currentProjects =
    currentTheme === "dark" ? projects.developer : projects.creative[activeTab];

  return (
    <div
      id="next-section"
      className="flex flex-col justify-center items-center gap-10"
    >
      <SectionTitle>FEATURED PROJECTS</SectionTitle>

      {currentTheme === "light" ? (
        <div className="flex flex-col lg:flex-row gap-2">
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
      ) : (
        ""
      )}

      {currentProjects.map((p, index) => (
        <RevealWrapper key={`${currentTheme}-${activeTab}-${p.title}`}>
          <ProjectCard project={p} reverse={index % 2 === 1} />
        </RevealWrapper>
      ))}
    </div>
  );
};

export default ProjectSection;
