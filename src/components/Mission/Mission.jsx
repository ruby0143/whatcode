import React from "react";
import "./Mission.css";
import Logo from "../customLogo/Logo";
import potrait from "../images/potrait.png";

function Mission() {
  return (
    <div className="mission" style={{backgroundColor:"#FAFAFA"}}>
      <div className="mtext">MISSION</div>
      <Logo />
      <div className="cnt">
        <div className="leftc">
          <img src={potrait} id="potrait" />
        </div>
        <div className="rightc">
          <div className="personalised inp">
            <span className="rbt">Personalised</span>
            <div className="sub">
              Our core idealogy is to provide personalised homes to meet the
              very specific needs of residents.
            </div>
          </div>
          <div className="inp">
            Commited
          </div>
          <div className="inp">
            CQuality and Services Oriented
          </div>
          <div className="inp">
            Timely
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
