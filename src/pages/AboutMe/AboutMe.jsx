import Footer from "../../atoms/Footer/Footer"
import Header from "../../atoms/Header/Header"
import Title from "../../atoms/Title/Title"

const AboutMe = () => {
  return (
    <>
      <Header />
      <div className="about-me__principalContainer">
        <main>
          <div className="global-styles__main__bannerContainer">
            <img className="global-styles__main__banner" src="assets/banner.png" alt="Banner" />
          </div>
          <img className="global-styles__main__profilePicture" src="assets/profile.jpg" alt="Mi foto" onClick={() => { window.open("https://www.linkedin.com/in/richardirala/") }}/>
        </main>

        <div>
          <Title>Sobre mi</Title>
          <p className="about-me__generalText">
            Actualmente me desempeño como Ingeniero de Software Mid-Level, enfocado en el desarrollo front-end y en integraciones con blockchain EVM, dentro de Sequence.xyz. Me caracterizo por ser proactivo y autodidacta. Tengo el privilegio de trabajar con un equipo de profesionales excepcionales, en un entorno donde la colaboración y la comunicación constante fortalecen y mantienen activas tanto mis habilidades técnicas como blandas. Siempre doy lo mejor de mí para contribuir al equipo y al éxito del proyecto.
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="about-me__linksContainer">
              <span>Mi GitHub: <a className="about-me__link" href="https://github.com/RichardIrala" target="_blank" rel="noreferer">Click aquí</a></span>
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