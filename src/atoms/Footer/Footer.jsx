import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer__footer">
      <div className="footer__firstDivContainer">
        <span className="footer__textContent">Encontrame en mis redes</span>
        <div className="footer__socialMediasContainer">
          <a href="https://github.com/RichardIrala" target="_blank" rel="noreferrer">
            <img className="footer__socialMediaImg" src="assets/socialMedias/github.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/richardirala/" target="_blank" rel="noreferrer">
            <img className="footer__socialMediaImg"  src="assets/socialMedias/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="footer__aboutMeContainer">
        <Link className="footer__hyperlink" to="/about-me">Sobre mi</Link>
      </div>
      <div className="footer__contactContainer">
        <span className="footer__textContent">¿Querés contactar conmigo?</span>
        <Link className="footer__hyperlink" to="/contact">Haz click aqui</Link>
      </div>
    </footer>
  )
}

export default Footer;