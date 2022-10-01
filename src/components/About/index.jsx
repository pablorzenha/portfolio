import React from "react";
import me from "../../assets/me.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./style.css";

function About() {
  return (
    <section id="about">
      <h5>Vamos conhecer um pouco</h5>
      <h2>sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>Pair programming na Kenzie Academy,</small>
              <br />
              <small>Streaming na Twitch e gamer,</small>
              <br />
              <small>5+ anos em gerência de vendas.</small>
            </article>

            {/* <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small></small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>10+ projetos completos</small>
            </article>
          </div>
          <p>
            Sempre dominando novas tecnologias para aplicar nos problemas do dia
            a dia.
          </p>
          <p>
            Sempre fui apaixonado por tecnologia e jogos. E, por isso, tinha
            curiosidade de saber como era o backstage desse universo. Aos 13
            anos de idade tive meu primeiro contato com a informática em um
            curso de pacote office e ambiente windows, aquilo foi apenas o
            início. Em seguida, veio curso web designer aos 14 anos, manutenção
            de microcomputadores aos 16 anos, curso de excel avançado aos 22
            anos e um detalhe, e não menos importante, aos 19 anos entrei na
            faculdade de TI. Mudei para curso para fazer engenharia mecânica, só
            que lá tive certeza que tinha que voltar para a tecnologia.
          </p>
          <a href="#contact" className="btn btn-primary letsTalk">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
