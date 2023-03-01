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
      <div>
        <a className="footer__hyperlink" href="/about-me">Sobre mi</a>
      </div>
      <div className="footer__contactContainer">
        <span className="footer__textContent">¿Querés contactar conmigo?</span>
        <a className="footer__hyperlink" href="/contact">Haz click aqui</a>
      </div>
    </footer>
  )
}

export default Footer;