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
    <div key={Math.random()} className="home__projectContainer">
      <div className="home__projectImageContainer">
        <img
          className="home__projectImage"
          src={project.image}
          alt="Project image"
        />
      </div>
      <div className="home__projectInfoContainer">
        <h3 className="home__projectName">{project.name}</h3>
        <p className="home__projectDescription">
          {splitDescription(project.description)}
        </p>
        <div className="home__shoreMoreBox">
          <button className="home__showMore" onClick={() => setIsOpen(true)}>
            {lang === "en" ? "Show more" : "Ver más"}
          </button>
        </div>
        {isOpen && (
          <div className="home__overlay" onClick={() => setIsOpen(false)}>
            <div
              className="home__projectContainer home__overlayProjectContainer"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="home__overlayCloseBtn"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
              <div className="home__projectImageContainer">
                <img
                  className="home__projectImage"
                  src={project.image}
                  alt="Project image"
                />
              </div>
              <div className="home__projectInfoContainer">
                <h3 className="home__projectName">{project.name}</h3>
                <p className="home__projectDescription home__mb30">
                  {project.description}
                </p>
                <div className="home__projectButtonsContainer">
									<ButtonCTA lang={lang} project={project} type={"code"}/>
									<ButtonCTA lang={lang} project={project} type={"demo"}/>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="home__projectButtonsContainer">
          <ButtonCTA lang={lang} project={project} type={"code"}/>
					<ButtonCTA lang={lang} project={project} type={"demo"}/>
        </div>
      </div>
    </div>
  );
};
