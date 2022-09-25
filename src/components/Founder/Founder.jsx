import React from "react";
import "./founder.css";
import founder from "../images/image8.png";
import Logo from "../customLogo/Logo";

function Founder() {
  return (
    <div className="founder">
      <div className="fcnt">
        <div className="mtext">Founder's Message</div>
        <div>
          <img src={founder} className="fimg" />
        </div>
        <Logo />
        <div className="fintro">
          <div className="rbt rs">Mr. Jayesh H. Pandya</div>
          <div className="desc">
            “When a customer buys a home, he is giving up a major chunk of his
            life's savings to do so. It is imperative to give him exactly what
            he looks for in his home.”
          </div>
        </div>
        <div className="fdesc">
          We bring to our clients much wanted human values, integrity, trust and
          an assurance of responsibility all coupled with our expertise in
          construction, engineering & management. Our biggest assets have always
          been our small but highly trained team of professional managers and
          engineers who are backed by a very able team of administrators. We
          have a clear vision about building on our strengths and our
          achievements while holding dear to us our basic principles
        </div>
      </div>
      <Logo />
    </div>
  );
}

export default Founder;
