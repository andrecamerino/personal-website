export interface Project {
  title: string;
  description: string;
  tags?: Tag[];
  images?: string[];
  video?: string;
  links?: ProjectLink[];
}

export interface ProjectLink {
  name: string;
  link: string;
}

export interface Tag {
  name: string;
  color?: string;
}