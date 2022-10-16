import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./style.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ejlyinj",
      "template_uodk8p2",
      form.current,
      "FzLuAB_2OLGsjd7x1"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Vamos nos conectar ?</h5>
      <h2>Contato</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>pabloaraujoengdev@gmail.com</h5>
            <a href="mailto:pabloaraujoengdev@gmail.com" target="__blank">
              Envie uma mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>(21) 97172-1697</h5>
            <a href="https://api.whatsapp.com/send?phone=5521971721697">
              Envie uma mensagem
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            required
          />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Escreve sua mensagem"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envie sua mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
