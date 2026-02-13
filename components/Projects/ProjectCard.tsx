import React from "react";
import { ProjectData } from "@/types/Project";
import { glass } from "@/styles/glass";
import Image from "next/image";
import Button from "../Button";

interface ProjectCardProps {
  project: ProjectData;
  reverse?: boolean; // optional prop if you want zig-zag layout
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse = false }) => {
  return (
    <div
      className={`${glass} rounded-4xl w-[80vw] flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } p-10 gap-10`}
    >
      <div className="shrink-0">
        <Image
          src={project.imageSrc}
          alt={project.title}
          width={400}
          height={400}
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 gap-2 justify-center lg:pl-10">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p className="mb-4">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Check it out</Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;