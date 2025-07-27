import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="footer__footer">
      <div className="footer__firstDivContainer">
        <span className="footer__textContent">
          {lang === "en"
            ? "Find me on my social media"
            : "Encontrame en mis redes"}
        </span>
        <div className="footer__socialMediasContainer">
          <a
            href="https://github.com/RichardIrala"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__socialMediaImg"
              src="assets/socialMedias/github.svg"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/richardirala/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__socialMediaImg"
              src="assets/socialMedias/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>

      <div className="footer__aboutMeContainer">
        <Link className="footer__hyperlink" to="/about-me">
          {lang === "en" ? "About me" : "Sobre mí"}
        </Link>
      </div>

      <div className="footer__contactContainer">
        <span className="footer__textContent">
          {lang === "en"
            ? "Want to get in touch?"
            : "¿Querés contactar conmigo?"}
        </span>
        <Link className="footer__hyperlink" to="/contact">
          {lang === "en" ? "Click here" : "Haz click aquí"}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
