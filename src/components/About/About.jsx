import React from "react";
import "./about.css";
import Logo from "../customLogo/Logo";
import parents from "../images/parents.png";
import Timer from "../images/timer.png";
import Star from "../images/star.png";
import Hands from "../images/hands.png";
import House from "../images/house.png";

export default function About() {
  return (
    <div className="about">
      <div className="sec1">
        <div className="text">About Us</div>
        <Logo />
      </div>
      <div className="sec2">
        <img src={parents} id="parImg" />
      </div>
      <div className="bg">
        <div className="sec3">
          <div className="text3">
            We endeavour to build homes which make it's residents happy and
            proud of their address. Residents are at heart of everything we do,
            we build homes to live in, not houses to stay in.
          </div>
          <Logo />
        </div>
        <div className="sec4">
          <div className="row">
            <div className="card">
              <img src={Timer} className="vectors spl" />
              <div className="cardText">
                Our track record has been impeccable with project completion on
                time and have surpassed expectations many a time, society
                members have positively received our redevelopment plans and
                encourage our modern and urbane designs to their neighbours.
              </div>
            </div>
            <div className="card">
              <img src={Star} className="vectors" />
              <div className="cardText">
                The Hetali Group is a redeveloper like no other with a profound
                focus on quality and long term satisfaction of its residents.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <img src={House} className="vectors" />
              <div className="cardText">
                They just don't endeavour but build homes which make it's
                residents proud of their address by putting home-owners at the
                heart and soul of everything they do from start to finish and
                post completion.
              </div>
            </div>
            <div className="card">
              <img src={Hands} className="vectors" />
              <div className="cardText">
                Hetali Group lives by the ethos of building homes to live and
                not houses to stay in.
              </div>
            </div>
          </div>
        </div>
        <div className="sec5">
          <div className="blackcnt"></div>
          <div className="abtTxt">
            Established in 1992, Hetali Group is a leading real estate developer
            of residential spaces across Mumbai and have earned an unmatched
            reputation amongst its very loyal customers. The company's
            customer-centric values, project management proficiency and
            technical expertise are amplified with over 6.5 lakh sq.ft. built
            and almost 1 lakh sq.ft underway leading to more than families!
            <br></br>
            <br />
            The Hetali Group promises a lifestyle second to none. In a span of
            over four decades, the group has proved to be one of the most
            reputed real estate builders in the western suburbs of Mumbai with
            residences in prime locations such as Andheri, Goregaon, Vile Parle
            and Juhu.
            <br></br>
            <br />
            Spearheaded by Mr Jayesh Pandya, the company's central ideology is
            to provide homes customized to the customer's requirements and
            home’s that are superior in nature keeping in mind the needs of the
            modern home user.
          </div>
        </div>
      </div>
    </div>
  );
}
