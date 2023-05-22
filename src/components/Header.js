import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {

    
  return (
    <>
      <nav  className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div  className="container px-5">
          <a  className="navbar-brand" href="index.html">
            <span  className="fw-bolder text-primary">TechStack</span>
          </a>

          <ThemeToggler />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="resume.html">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="projects.html">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
