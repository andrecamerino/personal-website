import { Project } from "@/types/Project";
import { glass } from "@/styles/glass";
import Button from "../Button";
import { truncateText } from "@/utils/truncateText";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { useFullscreen } from "@/context/FullscreenContext";
import FullscreenVideo from "../Fullscreen/FullscreenVideo";
import FullscreenCarousel from "../Fullscreen/FullscreenCarousel";
import ProjectTagSection from "./ProjectTagSection";
import FullscreenProjectDescription from "../Fullscreen/FullscreenProjectDescription";
import ProjectLinks from "./ProjectLinks";
import FullscreenProjectLinks from "../Fullscreen/FullscreenProjectLinks";
interface ProjectCardProps {
  project: Project;
  reverse?: boolean; // optional prop for zig-zag layout
}

const ProjectCard = ({ project, reverse = false }: ProjectCardProps) => {
  const { setContent } = useFullscreen();
  return (
    <div
      className={`${glass} group rounded-4xl w-[90vw] lg:w-[80vw] max-w-90 lg:max-w-400 flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } p-6 lg:p-10 gap-10`}
    >
      {(project.images || project.video) && (
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
      )}

      <div className="flex flex-col flex-1 gap-2 lg:pl-10 items-start justify-center">
        <h1 className="text-2xl font-bold">
          {truncateText(project.title, 50)}
        </h1>
        {project.tags && <ProjectTagSection className="" tags={project.tags} />}
        <p className="my-4">{truncateText(project.description, 300)}</p>

        {/* Bottom div aligned based on reverse */}
        <div className="flex flex-row flex-wrap w-full justify-center lg:justify-start gap-2 lg:gap-4">
          <Button
            onClick={() =>
              setContent(<FullscreenProjectDescription project={project} />)
            }
          >
            🔎 Read More
          </Button>
          {project.links && (
            <Button
              onClick={() =>
                setContent(<FullscreenProjectLinks project={project} />)
              }
              className="block lg:hidden"
              variant="secondary"
            >
              🔗
            </Button>
          )}
          <div className="hidden lg:flex">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
