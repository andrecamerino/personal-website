import { Project } from "@/types/Project";
import Button from "../Button";

const ProjectLinks = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-row gap-2">
      {project.links &&
        project.links.map((l, i) => (
          <a href={l.link} key={i} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">🔗 {l.name}</Button>
          </a>
        ))}
    </div>
  );
};

export default ProjectLinks;
