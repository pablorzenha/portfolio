import React from "react";
import { BiCheck } from "react-icons/bi";
import "./style.css";
function Services() {
  return (
    <section id="services">
      <h5>O que posso oferecer ?</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Conhecimento UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desenvolvimento para melhor experiência e interação do cliente
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Colaboração com o design web e permitindo uma navegação simples
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Revisão para melhor usuabilidade</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Refatoração de códigos</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Conhecimento em lógica de programaçao</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Diversidade em tipos de liguagem</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Capacidade em resolver problemas</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Me atualizo constatemente</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Criação</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Código Limpo, visando qualidade nas manutenções</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Reponsividade e conceito de programação visual</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Foco em navegabilidade e funcionabilidade</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Portfolio atualizado</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
