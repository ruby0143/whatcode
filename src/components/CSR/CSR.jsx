import React from "react";
import "../Mission/Mission.css";
import Logo from "../customLogo/Logo";
import children from "../images/children.png";

function CSR() {
  return (
    <div className="mission" style={{backgroundColor:"#F5F7F8"}}>
      <br />
      <div className="mtext">Corporate Social Responsibilty</div>
      <Logo />
      <div className="cnt">
        <div className="rightc">
          <div className="personalised inp">
            <span className="rbt">Education for the under-priviliged</span>
            <div className="sub">
              We believe that our future lies in the holistic educational
              foundation of the youth and we have nurtured that cause by
              providing the necessary books and monetary support to the
              under-privileged children of Mumbai & also at several villages in
              Gujarat. As the Trustees of the H A Desai Boarding School in
              Matunga, Mumbai, we have been providing living and hospitality
              services to the academically bright students from the weaker
              monetary sections of the society.
            </div>
          </div>
          <div className="inp">Support For Rural Farmers</div>
          <div className="inp">Spiritual</div>
        </div>
        <div className="leftc">
          <img src={children} id="potrait" />
        </div>
      </div>
    </div>
  );
}

export default CSR;
