import { Project } from "@/types/Project";

const FullscreenVideo = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h3
        className="text-(--color-primary) text-2xl font-bold"
        autoCapitalize="characters"
      >
        {project.title}
      </h3>
      <video
        src={`projects/${project.video}`}
        loop
        autoPlay
        playsInline
        controls
        className="w-full h-full lg:w-[90%] lg:h-[90%] object-cover rounded-3xl"
      />
      <p className="font-extralight text-xs">*reduced quality for smooth playback (i dont want to pay 😂)</p>
    </div>
  );
};

export default FullscreenVideo;
