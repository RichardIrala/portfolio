import { useState } from "react";
import Header from "../../atoms/Header/Header";

const Home = () => {
  const [renderSection, setRenderSection] = useState("my-projects");

  const projects = [
    {
      name: "RETRO GAMES",
      description: "Se trata de una webapp en la que se puede jugar al  wordle, ahorcado, entre otros.",
      image: "assets/projects/prettyPets.png",
    },
    {
      name: "Pretty Pets",
      description: "App e-commerce de Mascotas desarrollada con React Native, Express y MongoDB, este proyecto es una emulacion de 1 mes a travez de No Country. Cuenta con vistas Home, List Products, Detail Products, Cart, Bag Item, Profile, List Orders, Detail Orders, Login and Register.",
      image: "assets/projects/prettyPets2.png",
    },
    {
      name: "Mascotas perdidas",
      description: "WebApp que se enfoca en la publicación de mascotas perdidas con su última ubicación. Lo ùltimo es para ayudar a su búsqueda. La misma puede ser reportada por otro usuario y entonces te llegara un mensaje al email.",
      image: "assets/projects/prettyPets2.png",
      code: "https://github.com/RichardIrala/mascotas-perdidas-webapp-m7",
    },
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
                <a className="home__greyButton" href="https://www.google.com" target="_blank" rel="noreferrer">código</a>
                <a className="home__greenButton" href="https://www.google.com" target="_blank" rel="noreferrer">ir a ver</a>
              </div>
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
        </section>

        <footer>
          contactos mios...
        </footer>
      </div>
    </div>
  )
}

export default Home;