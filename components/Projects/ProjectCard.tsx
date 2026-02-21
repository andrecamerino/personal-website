import { Project } from "@/types/project";
import { glass } from "@/styles/glass";
import Button from "../Button";
import { truncateText } from "@/utils/truncateText";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { useFullscreen } from "@/context/FullscreenContext";
import FullscreenVideo from "../Fullscreen/FullscreenVideo";
import FullscreenCarousel from "../Fullscreen/FullscreenCarousel";
interface ProjectCardProps {
  project: Project;
  reverse?: boolean; // optional prop for zig-zag layout
}

const ProjectCard = ({ project, reverse = false }: ProjectCardProps) => {
  const { setContent } = useFullscreen();
  return (
    <div
      className={`${glass} rounded-4xl w-[80vw] flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } p-10 gap-10`}
    >
      <div
        onClick={() =>
          setContent(
            project.video ? (
              <FullscreenVideo project={project} />
            ) : (
              <FullscreenCarousel project={project}></FullscreenCarousel>
            ),
          )
        }
        className="shrink-0"
      >
        <ProjectThumbnail images={project.images} video={project.video} />
      </div>

      <div className="flex flex-col flex-1 gap-2 justify-center lg:pl-10">
        <h1 className="text-2xl font-bold">
          {truncateText(project.title, 50)}
        </h1>
        <p className="mb-4">{truncateText(project.description, 300)}</p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Check it out</Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
