import { useEffect, useState } from "react";
import { ButtonCTA } from "../ButtonCTA";
import type { Project } from "~/types";

interface CardProps {
  project: Project;
  lang: string;
}

export const Card = ({ project, lang }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function splitDescription(description: string) {
    if (description.length < 80) return description;
    const splittedDescription = description.slice(0, 79) + "...";
    return splittedDescription;
  }

  return (
    <div key={Math.random()} className="card__projectContainer">
      <div className="card__projectImageContainer">
        <img
          className="card__projectImage"
          src={project.image}
          alt="Project image"
        />
      </div>
      <div className="card__projectInfoContainer">
        <h3 className="card__projectName">{project.name}</h3>
        <p className="card__projectDescription">
          {splitDescription(project.description)}
        </p>
        <div className="card__showMoreBox">
          <button className="card__showMore" onClick={() => setIsOpen(true)}>
            {lang === "en" ? "Show more" : "Ver más"}
          </button>
        </div>
        {isOpen && (
          <div className="card__overlay" onClick={() => setIsOpen(false)}>
            <div
              className="card__projectContainer card__overlayProjectContainer"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="card__overlayCloseBtn"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
              <div className="card__projectImageContainer">
                <img
                  className="card__projectImage"
                  src={project.image}
                  alt="Project image"
                />
              </div>
              <div className="card__projectInfoContainer">
                <h3 className="card__projectName">{project.name}</h3>
                <p className="card__projectDescription card__mb30">
                  {project.description}
                </p>
                <div className="card__projectButtonsContainer">
                  <ButtonCTA lang={lang} project={project} type={"code"} />
                  <ButtonCTA lang={lang} project={project} type={"demo"} />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="card__projectButtonsContainer">
          <ButtonCTA lang={lang} project={project} type={"code"} />
          <ButtonCTA lang={lang} project={project} type={"demo"} />
        </div>
      </div>
    </div>
  );
};
