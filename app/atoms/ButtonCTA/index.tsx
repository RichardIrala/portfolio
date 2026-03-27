import type { Project } from "~/types";

interface ButtonCTAProps {
  project: Project;
  lang: string;
  type: "demo" | "code";
}

export const ButtonCTA = ({ project, lang, type }: ButtonCTAProps) => {
  if (type === "demo" ? !project.deploy : !project.code) return;
  return (
    <a
      className={type === "demo" ? "home__greenButton" : "home__greyButton"}
      href={type === "demo" ? project.deploy : project.code}
      target="_blank"
      rel="noreferrer"
    >
      {type === "demo" ? "demo" : lang === "en" ? "source" : "código"}
    </a>
  );
};
