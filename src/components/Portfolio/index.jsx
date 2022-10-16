import React from "react";
import me from "../../assets/me.jpeg";
import hamburgueria from "../../assets/hamburgueria.png";
import "./style.css";
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Meus recentes trabalhos</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={hamburgueria} alt="hamburgueria" />
          </div>
          <h3>React + Axios + Toast </h3>
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
            <img src={me} alt="" />
          </div>
          <h3>Este é um porfolio ... </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="https://linkedin.com/"
              className="btn btn-primary"
              target="__blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={me} alt="" />
          </div>
          <h3>Este é um porfolio ... </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="https://linkedin.com/"
              className="btn btn-primary"
              target="__blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={me} alt="" />
          </div>
          <h3>Este é um porfolio ... </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="https://linkedin.com/"
              className="btn btn-primary"
              target="__blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={me} alt="" />
          </div>
          <h3>Este é um porfolio ... </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="https://linkedin.com/"
              className="btn btn-primary"
              target="__blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={me} alt="" />
          </div>
          <h3>Este é um porfolio ... </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="https://linkedin.com/"
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
