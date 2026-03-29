interface Project {
  description: string;
  image: string;
  name: string;
  code?: string;
  deploy?: string;
}

type Lang = "es" | "en";


export type { Project, Lang }