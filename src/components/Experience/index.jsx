import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./style.css";

function Experience() {
  return (
    <section id="experience">
      <h5>Quais habilidades eu tenho ?</h5>
      <h2>Minhas experiências</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvimento Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">experiência</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">experiência</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">experiência</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">cursando</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desenvolvimento Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">cursando</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
