import { glass } from "@/styles/glass";
import { Tag } from "@/types/Project";
import { getDefaultTagColor } from "@/utils/getDefaultTagColor";
import { RevealWrapper } from "../RevealWrapper";

interface ProjectTagProps {
  tag: Tag;
  index: number;
}

const ProjectTag = ({ tag, index }: ProjectTagProps) => {
  const bgColor = getDefaultTagColor(tag.name) ?? tag.color;
  return (
    <RevealWrapper delay={index / 10}>
      <div
        style={{ "--i": index } as React.CSSProperties}
        className={`${glass} ${bgColor} tag-shake inline-flex px-4 py-0.5 rounded-3xl
  items-center justify-center select-none
  text-sm font-semibold border`}
      >
        {tag.name}
      </div>
    </RevealWrapper>
  );
};

export default ProjectTag;
