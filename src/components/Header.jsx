import React, { Component } from "react";
import profileImage from "../data/images/perfil3.jpg";
import githubLogo from "../data/images/github-brands.svg";
import linkedInLogo from "../data/images/linkedin-brands.svg";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header class="header">
        <div class="title">
          <h1 class="header-title1">Martin Pezzini Bachmann</h1>
          <img
            class="img-perfil"
            src={profileImage}
            id="foto"
            alt="Foto de Martin"
          />
        </div>
        <nav class="header-buttons">
          <a
            class="linkedin-button"
            href="https://www.linkedin.com/in/martin-p-bachmann/"
          >
            <img src={linkedInLogo} alt="linkedin logo" />
            <span>LinkedIn</span>
          </a>
          <a class="github-button" href="https://github.com/martin-bachmann">
            <img src={githubLogo} alt="github logo" />
            <span>Github</span>
          </a>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
