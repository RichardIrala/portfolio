import Footer from "../../atoms/Footer/Footer";
import Header from "../../atoms/Header/Header";
import Title from "../../atoms/Title/Title";
import { useLanguage } from "../../context/LanguageContext";

const AboutMe = () => {
  const { lang } = useLanguage();

  return (
    <>
      <Header />
      <div className="about-me__principalContainer">
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
            alt={lang === "en" ? "My photo" : "Mi foto"}
            onClick={() => {
              window.open("https://www.linkedin.com/in/richardirala/");
            }}
          />
        </main>

        <div>
          <Title>{lang === "en" ? "About me" : "Sobre mi"}</Title>
          <p className="about-me__generalText">
            {lang === "en" ? (
              <>
                I currently work as a Mid-Level Software Engineer focused on
                front-end development and integrations with EVM blockchain at
                Sequence.xyz. I am proactive and self-taught. I have the
                privilege of working with an exceptional team of professionals,
                in an environment where collaboration and constant communication
                strengthen and maintain both my technical and soft skills. I
                always give my best to contribute to the team and the project's
                success.
                <br />
                <br />
                <br />
                <br />
                <div className="about-me__linksContainer">
                  <span>
                    My GitHub:{" "}
                    <a
                      className="about-me__link"
                      href="https://github.com/RichardIrala"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here
                    </a>
                  </span>
                  <span>
                    Contact me:{" "}
                    <a className="about-me__link" href="/contact">
                      Click here
                    </a>
                  </span>
                </div>
              </>
            ) : (
              <>
                Actualmente me desempeño como Ingeniero de Software Mid-Level,
                enfocado en el desarrollo front-end y en integraciones con
                blockchain EVM, dentro de Sequence.xyz. Me caracterizo por ser
                proactivo y autodidacta. Tengo el privilegio de trabajar con un
                equipo de profesionales excepcionales, en un entorno donde la
                colaboración y la comunicación constante fortalecen y mantienen
                activas tanto mis habilidades técnicas como blandas. Siempre doy
                lo mejor de mí para contribuir al equipo y al éxito del
                proyecto.
                <br />
                <br />
                <br />
                <br />
                <div className="about-me__linksContainer">
                  <span>
                    Mi GitHub:{" "}
                    <a
                      className="about-me__link"
                      href="https://github.com/RichardIrala"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click aquí
                    </a>
                  </span>
                  <span>
                    Contacta conmigo:{" "}
                    <a className="about-me__link" href="/contact">
                      Click aquí
                    </a>
                  </span>
                </div>
              </>
            )}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
