import React from "react";
import { Project } from "@/types/project";
import { glass } from "@/styles/glass";
import Image from "next/image";
import Button from "../Button";
import { truncateText } from "@/utils/truncateText";
interface ProjectCardProps {
  project: Project;
  reverse?: boolean; // optional prop for zig-zag layout
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
        <h1 className="text-2xl font-bold">{truncateText(project.title, 30)}</h1>
        <p className="mb-4">{truncateText(project.description, 300)}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Check it out</Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;