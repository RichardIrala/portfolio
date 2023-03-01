import Footer from "../../atoms/Footer/Footer"
import Header from "../../atoms/Header/Header"
import Title from "../../atoms/Title/Title"

const AboutMe = () => {
  return (
    <>
      <Header />
      <div className="about-me__principalContainer">
        <main>
          <div className="contact__bannerContainer">
            <img className="contact__banner" src="assets/banner.png" alt="Banner" />
          </div>
          <img className="contact__profilePicture" src="assets/profile.jpg" alt="Mi foto" onClick={() => { window.open("https://www.linkedin.com/in/richardirala/") }}/>
        </main>

        <div>
          <Title>Sobre mi</Title>
          <p className="about-me__generalText">
            En la actualidad estoy buscando empleo como desarrollador frontend Jr. Tengo experiencia trabajando en ese rol.
            <br/>
            Bastante familiarizado con JavaScript, Next, React, lectura de figma, GitHub, Git y gestores de tarea como Jira, Trello, Monday, Asana, etc. 
            <br/>
            Me caracterizo por ser alguien bastante proactivo y autodidacta. Hice un curso durante casi 2 años de programación fullstack y de ahí me enfoque a lo que es FrontEnd. Tengo el agrado de contar con experiencias tanto laborales pagas y otras más en las cuáles tuve el placer de trabajar con distintos desarrolladores con los cuáles mejore mis habilidades técnicas y blandas.
            <br/>
            Acostumbrado a estar comunicado con el equipo gracias a lo anterior y apasionado por la industria IT.
            <br/>
            <div className="about-me__linksContainer">
              <span>Adjunto mi GitHub: <a className="about-me__link" href="https://github.com/RichardIrala" target="_blank" rel="noreferer">Click aquí</a></span>
              <span>Contacta conmigo: <a className="about-me__link" href="/contact">Click aquí</a></span>
            </div>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutMe;