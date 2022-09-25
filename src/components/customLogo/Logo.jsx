import React from "react";
import "../About/about.css"
import Path from "../images/path834.png";
function Logo() {
  return (
    <div className="customLogo">
      <div className="rectA"></div>
      <div className="aboutImg">
        <img src={Path} />
      </div>
      <div className="rectA"></div>
    </div>
  );
}

export default Logo;
