import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{paddingTop: "20px", paddingBottom: "20px"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span style={{fontWeight: "bold", color: "#3399ff"}}>PN</span>
          <span style={{fontWeight: "bold"}}>INFOSYS</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                AboutUs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Training
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Workshop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Xiaomi MI Company
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bentchair Company
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Rjit College
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mpct College
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Events
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Student's Birthday
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Aniversary Celebration
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tour's
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Placement
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Placement Desk
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Placement Gallery
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ContactUs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="http://internship2020.pneducation.website/"
                target="_blank"
                rel="noopener noreferrer">
                InternshipRegistration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
