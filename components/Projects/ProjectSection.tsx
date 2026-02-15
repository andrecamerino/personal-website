'use client'

import { projects } from "@/data/projects";
import SectionTitle from "../SectionTitle";
import ProjectCard from "./ProjectCard";
import { useTheme } from "@/context/ThemeContext";

const ProjectSection = () => {
  const { currentTheme } = useTheme();

  const currentProjects = currentTheme === "dark"
    ? projects.developer : projects.creative

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <SectionTitle>FEATURED PROJECTS</SectionTitle>

      {currentProjects.map((p, index) => (
        <ProjectCard
          key={index}
          project={p}
          reverse={index % 2 === 1} // zig-zag layout
        />
      ))}
    </div>
  );
};

export default ProjectSection;