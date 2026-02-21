import { Project } from "@/types/project";

const FullscreenVideo = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-(--color-primary) text-2xl font-bold" autoCapitalize="characters">{project.title}</h1>
      <video
        src={`projects/${project.video}`}
        loop
        autoPlay
        playsInline
        controls
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
  );
};

export default FullscreenVideo;
