import { ProjectData } from "@/types/Project";

export default class Project implements ProjectData {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;

  constructor(title: string, description: string, imageSrc: string, link?: string, maxLength: number = 500) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.link = link;

    this.description =
      description.length > maxLength
        ? description.slice(0, maxLength) + "..."
        : description;
  }

  // Optional method to get full description if needed
  fullDescription(original: string) {
    return original;
  }
}