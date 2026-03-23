import { Project } from "@/types/Project";
import ProjectLinks from "../Projects/ProjectLinks";

const FullscreenProjectLinks = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-10 items-center sm:p-20">
      <h3
        className="text-(--color-primary) text-2xl font-bold"
        autoCapitalize="characters"
      >
        {project.title} Links
      </h3>
      <ProjectLinks project={project}/>
    </div>
  );
};

export default FullscreenProjectLinks;
