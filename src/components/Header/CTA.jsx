import React from "react";
import curriculo from "../../assets/curriculo.pdf";
//import PDF min 48

function CTA() {
  return (
    <div className="cta">
      <a href={curriculo} className="btn" alt="curriculo">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Vamos conversar ?
      </a>
    </div>
  );
}

export default CTA;
