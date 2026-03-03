import { Tag } from "@/types/Project";
import ProjectTag from "./ProjectTag";

interface ProjectTagSectionProps {
  tags: Tag[];
  className: string;
}

const ProjectTagSection = ({ tags, className }: ProjectTagSectionProps) => {
  return (
    <div className={`${className} flex flex-row flex-wrap gap-2`}>
      {tags.map((t, i) => (
        <ProjectTag key={i} tag={t} index={i}/>
      ))}
    </div>
  );
};

export default ProjectTagSection;
