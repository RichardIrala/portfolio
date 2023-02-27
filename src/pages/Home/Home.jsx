import { useState } from "react";
import Footer from "../../atoms/Footer/Footer";
import Header from "../../atoms/Header/Header";

const Home = () => {
  const [renderSection, setRenderSection] = useState("my-projects");

  const projects = [
    {
      name: "RETRO GAMES",
      description: "Se trata de una webapp en la que se puede jugar al  wordle, ahorcado, entre otros.",
      image: "assets/projects/retroGames.png",
      code: "https://github.com/No-Country/S4-10-M-MERN",
      deploy: "",
    },
    {
      name: "Pretty Pets",
      description: "App e-commerce de Mascotas desarrollada con React Native, Express y MongoDB, este proyecto es una emulacion de 1 mes a travez de No Country. Cuenta con vistas Home, List Products, Detail Products, Cart, Bag Item, Profile, List Orders, Detail Orders, Login and Register.",
      image: "assets/projects/prettyPets2.png",
      code: "https://github.com/No-Country/s3-06-m-reactnative-node",
      deploy: "",
    },
    {
      name: "Mascotas perdidas",
      description: "WebApp que se enfoca en la publicación de mascotas perdidas con su última ubicación. Lo ùltimo es para ayudar a su búsqueda. La misma puede ser reportada por otro usuario y entonces te llegara un mensaje al email.",
      image: "assets/projects/petLost.png",
      code: "https://github.com/RichardIrala/mascotas-perdidas-webapp-m7",
      deploy: "",
    },
  ]

  const projectsExperience = [
    {
      name: "Front-End developer en Xerial",
      description: [
        "Fueron 4 meses en los cuáles me desempeñe como desarrollador Front-End Junior en Xerial. Encargado de Traducir diseños a lenguaje de programación, desarrollar la parte visual de las aplicaciones y sitios, optimizar interfaces de usuario, servir de enlace con los diseñadores gráficos para decidir sobre los elementos de UI/UX.",
        "Utilizamos como tecnologìas principales en el FrontEnd: Next, Sass y React junto con Web3Auth entre lo más destacado.",
        "Se utilizo atomic design como sistema de diseño de componentes en el Front-End el cuál en gran parte fue construido por mi durante mi tiempo allí."
      ],
      image: "assets/experience/logoXerial.png",
    }
  ]

  function setRenderSectionMyProjects() {
    setRenderSection("my-projects");
  }

  function setRenderSectionMyExperience() {
    setRenderSection("my-experience");
  }

  function setMenuOptionClass(active) {
    const base = "home__menu--option "
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
      return <a className="home__greenButton" href={project.deploy} target="_blank" rel="noreferrer">ir a ver</a>
    }

    function renderCodeButton(project) {
      if (!project.code) return;
      return <a className="home__greyButton" href={project.code} target="_blank" rel="noreferrer">código</a>
    }

    if (renderSection !== "my-projects") return;
    
    return (
      <div className="home__projectsContainer">
        {projects?.map((project) => (
          <div key={Math.random()} className="home__projectContainer">
            <div className="home__projectImageContainer">
              <img className="home__projectImage" src={project.image} alt="Project image" />
            </div>
            <div className="home__projectInfoContainer">
              <h3 className="home__projectName">{project.name}</h3>
              <p className="home__projectDescription">{splitDescription(project.description)}</p>
              <div className="home__projectButtonsContainer">
                {renderCodeButton(project)}
                {renderDeployButton(project)}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  function MyExperience() {
    if (renderSection !== "my-experience") return;
    return (
      <div className="home__myExperienceContainer">
        {projectsExperience?.map((project) => (
          <div className="home__myExperienceProjectContainer">
            <div className="home__myExperienceImageContainer">
              <img className="home__myExperienceImage" src={project.image} alt="project image" />
            </div>
            <h2 className="home__myExperienceProjectName">{project.name}</h2>
            <div className="home__myExperienceDescriptionContainer">
              {project.description.map((description) => (<p className="home__myExperienceDescription">{description}</p>))}
            </div>
            <div className="home__myExperienceButtonsContainer">
              {/* <button className="home__myExperienceGoToSeeButtonGrey">ir a ver</button>
              <button className="home__myExperienceGoToSeeButtonGreen">ir a ver 2</button> */}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="home__principalContainer">
        <main>
          <div className="home__bannerContainer">
            <img className="home__banner" src="assets/banner.png" alt="Banner" />
          </div>
          <img className="home__profilePicture" src="assets/profile.jpg" alt="Mi foto" onClick={() => { window.open("https://www.linkedin.com/in/richardirala/") }}/>
          <h1 className="home__presentationTitle">Hola, soy Richard, <br /> desarrollador web FrontEnd</h1>
        </main>

        <section>
          <div className="home__menu">
            <button className={setMenuOptionClass("my-projects")} onClick={setRenderSectionMyProjects}>mis proyectos</button>
            <button className={setMenuOptionClass("my-experience")} onClick={setRenderSectionMyExperience}>mi experiencia</button>
          </div>
          <MyProjects projects={projects}/>
          <MyExperience/>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home;