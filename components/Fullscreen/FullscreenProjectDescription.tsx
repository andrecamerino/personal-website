import { Project } from "@/types/Project";

const FullscreenProjectDescription = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-10 items-center sm:p-20">
      <h3
        className="text-(--color-primary) text-2xl font-bold"
        autoCapitalize="characters"
      >
        {project.title}
      </h3>
      <p className="lg:max-w-160">{project.description}</p>
    </div>
  );
};

export default FullscreenProjectDescription;
