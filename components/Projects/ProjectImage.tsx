"use client";

import { useState } from "react";
import Image from "next/image";
import { getPlaceholder } from "@/utils/projectMedia";

// Images already loaded at a given size. Remounting one (e.g. when the
// thumbnail rotates to a preloaded image) skips the fade, since it comes
// straight from cache, but still waits for onLoad in case it was evicted
const loadedImages = new Set<string>();

interface ProjectImageProps {
  src: string; // relative to public/projects
  alt: string;
  sizes: string;
  fit?: "cover" | "contain";
  className?: string;
  onLoad?: () => void;
}

// Fills its parent with a project image, showing a blurred preview (or a
// shimmer if there's no preview) until the real image has loaded
const ProjectImage = ({ src, alt, sizes, fit = "cover", className = "", onLoad }: ProjectImageProps) => {
  const key = `${src}|${sizes}`;
  const [loaded, setLoaded] = useState(false);
  const [fade] = useState(() => !loadedImages.has(key));
  const placeholder = getPlaceholder(src);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        aria-hidden
        // Fades out only once the image has fully faded in, so nothing behind shows through
        className={`absolute inset-0 ${fade ? "transition-opacity duration-300 delay-500" : ""} ${loaded ? "opacity-0" : "opacity-100"} ${
          placeholder ? "scale-110 blur-xl" : "shimmer"
        }`}
        style={
          placeholder
            ? {
                backgroundImage: `url(${placeholder})`,
                backgroundSize: fit,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : undefined
        }
      />
      <Image
        src={`/projects${src}`}
        alt={alt}
        fill
        sizes={sizes}
        onLoad={() => {
          loadedImages.add(key);
          setLoaded(true);
          onLoad?.();
        }}
        className={`${fit === "cover" ? "object-cover" : "object-contain"} ${fade ? "transition-opacity duration-500" : ""} ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ProjectImage;
