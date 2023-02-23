import { useState } from "react";
import Footer from "../../atoms/Footer/Footer";
import Header from "../../atoms/Header/Header";
import Input from "../../atoms/Input/Input";
import Title from "../../atoms/Title/Title";
import api from "../../helpers/api";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageSended, setMessageSended] = useState(false);

  function onChangeFullname(event) {
    setFullname(event.target.value);
  }
  
  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangeMessage(event) {
    setMessage(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    try {
      const resjson = await api.sendMessage({ email, fullname, message });
      setMessageSended(true);
    } catch (error) {
      alert(error.message + " error");
    }
    setLoading(false);
  }

  return (
    <>
      <Header />
      <div className="contact__principalContainer">
        <main>
          <div className="contact__bannerContainer">
            <img className="contact__banner" src="assets/banner.png" alt="Banner" />
          </div>
          <img className="contact__profilePicture" src="assets/profile.jpg" alt="Mi foto" onClick={() => { window.open("https://www.linkedin.com/in/richardirala/") }}/>
        </main>

        <form className="contact__form"  onSubmit={handleSubmit}>
          <Title>contacto</Title>
          <div>
            <h2 className="contact__titleForInput">Nombre completo</h2>
            <Input
              type="text"
              name="fullname"
              placeholder="Ej: Fulano Goméz"
              onChange={onChangeFullname}
            />
          </div>
          <div>
            <h2 className="contact__titleForInput">Email</h2>
            <Input
              type="text"
              name="email"
              placeholder="Ingrese su email"
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <h2 className="contact__titleForInput">Mensaje</h2>
            <Input
              type="text"
              name="message"
              placeholder="Ingrese el mensaje que quiera enviarme. Un saludo!"
              onChange={onChangeMessage}
            />
          </div>
          <div className="contact__submitButtonContainer">
            <button className="contact__submitButton">{!loading ? "enviar" : "Cargando..."}</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Contact;