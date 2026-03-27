import { useState } from "react";
import Footer from "../../atoms/Footer/Footer";
import Header from "../../atoms/Header/Header";
import allProjects from "./projects";
import allProjectsExperience from "./projectsExperience";
import { useLanguage } from "~/context/LanguageContext";
import { Card } from "~/atoms/Card";
import type { Project } from "~/types";

const Home = () => {
  const { lang } = useLanguage();

  const projects = allProjects[lang];
  const projectsExperience = allProjectsExperience[lang];

  const [renderSection, setRenderSection] = useState("my-projects");

  function setRenderSectionMyProjects() {
    setRenderSection("my-projects");
  }

  function setRenderSectionMyExperience() {
    setRenderSection("my-experience");
  }

  function setMenuOptionClass(active: string) {
    const base = "home__menu--option ";
    if (active != renderSection) return base;
    return base + "home__menu--optionRose";
  }

  function MyProjects({ projects } : { projects: Project[] }) {
    

    if (renderSection !== "my-projects") return;

    return (
      <div className="home__projectsContainer">
        {projects?.map((project: Project) => (
          <Card key={Math.random()} lang={lang} project={project}/>
        ))}
      </div>
    );
  }

  function MyExperience() {
    if (renderSection !== "my-experience") return;
    return (
      <div className="home__myExperienceContainer">
        {projectsExperience?.map((project, index: number) => (
          <div key={index} className="home__myExperienceProjectContainer">
            <div className="home__myExperienceImageContainer">
              <img
                className="home__myExperienceImage"
                src={project.image}
                alt="project image"
              />
            </div>
            <h2 className="home__myExperienceProjectName">{project.name}</h2>
            <div className="home__myExperienceDescriptionContainer">
              {project.description.map((description, index) => (
                <p key={index} className="home__myExperienceDescription">
                  {description}
                </p>
              ))}
            </div>
            <div className="home__myExperienceButtonsContainer">
              {/* <button className="home__myExperienceGoToSeeButtonGrey">ir a ver</button>
              <button className="home__myExperienceGoToSeeButtonGreen">ir a ver 2</button> */}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="home__principalContainer">
        <main>
          <div className="global-styles__main__bannerContainer">
            <img
              className="global-styles__main__banner"
              src="assets/banner.png"
              alt="Banner"
            />
          </div>
          <img
            className="global-styles__main__profilePicture"
            src="assets/profile.jpg"
            alt="Mi foto"
            onClick={() => {
              window.open("https://www.linkedin.com/in/richardirala/");
            }}
          />
          {lang === "en" ? (
            <h1 className="global-styles__main__presentationTitle">
              Hi, I'm Richard, <br /> FrontEnd web developer
            </h1>
          ) : (
            <h1 className="global-styles__main__presentationTitle">
              Hola, soy Richard, <br /> desarrollador web FrontEnd
            </h1>
          )}
        </main>

        <section>
          <div className="home__menu">
            <button
              className={setMenuOptionClass("my-projects")}
              onClick={setRenderSectionMyProjects}
            >
              {lang === "en" ? "my projects" : "mis proyectos"}
            </button>
            <button
              className={setMenuOptionClass("my-experience")}
              onClick={setRenderSectionMyExperience}
            >
              {lang === "en" ? "my experience" : "mi experiencia"}
            </button>
          </div>
          <MyProjects projects={projects} />
          <MyExperience />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
