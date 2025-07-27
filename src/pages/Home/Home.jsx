import { useState } from "react";
import Footer from "../../atoms/Footer/Footer";
import Header from "../../atoms/Header/Header";
import allProjects from "./projects";
import allProjectsExperience from "./projectsExperience";
import { useLanguage } from "../../context/LanguageContext";

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

  function setMenuOptionClass(active) {
    const base = "home__menu--option ";
    if (active != renderSection) return base;
    return base + "home__menu--optionRose";
  }

  function MyProjects({ projects }) {
    function splitDescription(description) {
      if (description.length < 80) return description;
      const splittedDescription = description.slice(0, 79) + "...";
      return splittedDescription;
    }

    function renderDeployButton(project) {
      if (!project.deploy) return;
      return (
        <a
          className="home__greenButton"
          href={project.deploy}
          target="_blank"
          rel="noreferrer"
        >
          demo
        </a>
      );
    }

    function renderCodeButton(project) {
      if (!project.code) return;
      return (
        <a
          className="home__greyButton"
          href={project.code}
          target="_blank"
          rel="noreferrer"
        >
          código
        </a>
      );
    }

    if (renderSection !== "my-projects") return;

    return (
      <div className="home__projectsContainer">
        {projects?.map((project) => (
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
              <div className="home__projectButtonsContainer">
                {renderCodeButton(project)}
                {renderDeployButton(project)}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function MyExperience() {
    if (renderSection !== "my-experience") return;
    return (
      <div className="home__myExperienceContainer">
        {projectsExperience?.map((project, index) => (
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
