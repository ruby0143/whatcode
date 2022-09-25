import React from "react";
import "./Footer.css";
import Wlogos from "../images/wsl.png";
import Wlogox from "../images/wssl.png";
function Footer() {
  return (
    <div className="footer">
      <div className="ftcnt row">
        <div className="fleft col-lg-1 col-md-1 col-sm-2">
          <img src={Wlogos} id="ftimg" />
        </div>
        <div className="fright col-lg-11 col-md-12 row col-sm-12">
          <div className="list col-lg-3 col-sm-3 col-md-3 col-xs-3">
            <div className="listh">Quick Links</div>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Testimonials</li>
              <li>Gallery</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div className="list col-lg-3 col-sm-3 col-md-3 col-xs-3">
            <div className="listh">Flats in Mumbao</div>
            <ul>
              <li>1BHK Andheri West</li>
              <li>2BHK Andheri West</li>
              <li>3BHK Andheri West</li>
              <li>1BHK Goregaon East</li>
              <li>2BHK Goregaon East</li>
            </ul>
          </div>
          <div className="list col-lg-3 col-sm-3 col-md-3 col-xs-3">
            <div className="listh">Projects in Mumbai</div>
            <ul>
              <li>Ongoing</li>
              <li>Upcoming</li>
              <li>Completed</li>
              <li>Hetali Blessings</li>
              <li>Hetali Anuchhaya</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ftlogo">
        <div className="rectAw"></div>
        <div className="aboutImg">
          <img src={Wlogox} />
        </div>
        <div className="rectAw"></div>
      </div>
      <div className="copy">
        Copyright © 2022 Hetali Enterprises - All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
