'use client'

import SectionTitle from "../SectionTitle";
import ProjectCard from "./ProjectCard";
import { useTheme } from "@/context/ThemeContext";

const ProjectSection = () => {
  const { currentTheme } = useTheme();

  const projects = currentTheme === "dark"
    ? [
        {
          title: "Programming Project 1",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
          imageSrc: "/projects/lebron.webp",
          link: "https://www.youtube.com",
        },
        {
          title: "Programming Project 2",
          description: "Another programming project description...",
          imageSrc: "/projects/lebron.webp",
          link: "https://www.youtube.com",
        },
        {
          title: "Programming Project 2",
          description: "Another programming project description...",
          imageSrc: "/projects/lebron.webp",
          link: "https://www.youtube.com",
        },
      ]
    : [
        {
          title: "Creative Project 1",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
          imageSrc: "/projects/lebron.webp",
          link: "https://www.youtube.com",
        },
        {
          title: "Creative Project 2",
          description: "Another creative project description...",
          imageSrc: "/projects/lebron.webp",
          link: "https://www.youtube.com",
        },
        {
          title: "Creative Project 2",
          description: "Another creative project description...",
          imageSrc: "/projects/lebron.webp",
          link: "https://www.youtube.com",
        },
      ];

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <SectionTitle>FEATURED PROJECTS</SectionTitle>

      {projects.map((p, index) => (
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