import React from "react";
import Logo from "../images/logo.png";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">           
              <img src={Logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav frame1">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <div className="headerX">
                    About Us
                    <div className="rect"></div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div className="headerX">
                    Projects
                    <div className="rect"></div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div className="headerX">
                    Diversification
                    <div className="rect"></div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div className="headerX">
                    Our Process
                    <div className="rect"></div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div className="headerX">
                    Testimonnials
                    <div className="rect"></div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div className="headerX">
                    Careers
                    <div className="rect"></div>
                  </div>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div className="headerX">
                    Contact Us
                    <div className="rect"></div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
