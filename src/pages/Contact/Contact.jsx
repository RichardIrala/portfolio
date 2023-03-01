import { useState } from "react";
import Footer from "../../atoms/Footer/Footer";
import Header from "../../atoms/Header/Header";
import Title from "../../atoms/Title/Title";
import api from "../../helpers/api";
import LabelWithInput from "../../molecules/LabelWithInput/LabelWithInput";
import LabelWithTextarea from "../../molecules/LabelWithTextarea/LabelWithTextarea";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
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

  function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    }
    alert("Ingresaste un email inválido!")
    return (false)
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    try {
      if (!(email && fullname && message && validateEmail())) {
        setErrors({
          message: !message,
          email: !email,
          fullname: !fullname
        })
      } else {
        const resjson = await api.sendMessage({ email, fullname, message });
        setMessageSended(true);
      }
    } catch (error) {
      // alert(error.message + " error");
      alert("Hubo un error al enviar tu mensaje :c")
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
          <LabelWithInput
            title="Nombre completo"
            name="fullname"
            type="text"
            placeholder="Ej: Fulano Goméz"
            onChange={onChangeFullname}
            error={errors.fullname ? "Este campo es obligatorio" : ""}
          />
          <LabelWithInput
            title="Email"
            name="email"
            type="email"
            placeholder="Ingrese su email"
            onChange={onChangeEmail}
            error={errors.email ? "Este campo es obligatorio" : ""}
          />
          <LabelWithTextarea
            title="Mensaje"
            name="message"
            type="text"
            placeholder="Ingrese el mensaje que quiera enviarme. Un saludo!"
            onChange={onChangeMessage}
            error={errors.message ? "Este campo es obligatorio" : ""}
          />
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