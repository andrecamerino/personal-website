export interface Project {
  title: string;
  description: string;
  tags?: Tag[];
  images?: string[];
  video?: string;
  link?: string;
}

export interface Tag {
  name: string;
  color?: string;
}