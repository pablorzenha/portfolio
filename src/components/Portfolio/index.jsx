import React from "react";
import hamburgueria from "../../assets/hamburgueria.png";
import tibia from "../../assets/tibia.png";
import kenziehub from "../../assets/kenziehub.png";
import simpleCart from "../../assets/carrinhosimples.png";
import rzenhaEmpresas from "../../assets/rzenhaempresas.png";
import recruitersplace from "../../assets/recruitersplace.png";

import "./style.css";
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Meus recentes trabalhos</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={recruitersplace} alt="" />
          </div>
          <h3>Recruiter's place (Projeto TypeScript com Chat funcional)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/time-6/recruiters-place/settings"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://recruiters-place.vercel.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={kenziehub} alt="" />
          </div>
          <h3>
            KenzieHub (React + ContextApi + Axios + styled-components +
            router-dom){" "}
          </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pablorzenha/kenziehub"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://s3-14-eight.vercel.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={hamburgueria} alt="hamburgueria" />
          </div>
          <h3>Hamburgueria (React + Axios + Toast) </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pablorzenha/hamburgueria"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://entrega-s2-12-ten.vercel.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={tibia} alt="tibia" />
          </div>
          <h3>TibiaApi (React + Axios + router-dom + styled-components) </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pablorzenha/api-tibia"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://api-tibia.vercel.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={simpleCart} alt="" />
          </div>
          <h3>Exemplo cart simples (TypeScript + ContextApi) </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pablorzenha/simple-cart-typescript"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://react-atividade-s5-context-api-com-typescript-pablorzenha.vercel.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={rzenhaEmpresas} alt="" />
          </div>
          <h3>RzenhaHelp (JS Vanilla + CSS + HTML + AXIOS)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pablorzenha/projeto-empresas-js-vanilla"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://pablorzenha.github.io/projeto-empresas-js-vanilla/"
              className="btn btn-primary"
              target="__blank"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
