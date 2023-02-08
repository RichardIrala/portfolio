import Header from "../../atoms/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <div>
          <h1 className="home__presentationTitle">Hola, soy Richard, desarrollador web FrontEnd</h1>
          <p>Actualmente trabajando en <a href="">Xerial</a> como Front-End Jr</p>
        </div>
        <div>
          <img src="" alt="unaImagenALaDerecha" />
        </div>
      </section>

      <section>
        <h2>Mis proyectos</h2>
        <div>
          ....card
        </div>
      </section>

      <footer>
        contactos mios...
      </footer>
    </div>
  )
}

export default Home;