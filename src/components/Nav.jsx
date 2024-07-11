import React from "react";

function Nav() {
  return (
    <>
      <nav className="py-2 px-4 navbar navbar-expand-sm bg-light navbar-dark">
        <a routerlink className="navbar-brand" ng-reflect-router-link href="#/">
          <img src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/logo%2Fcolorlogo.png?alt=media&token=0386f0aa-e1e1-4950-924f-3eedaa82d967" />
        </a>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          className="navbar-toggler">
          <span className="navbar-toggler-icon bg-primary" />
        </button>
        <div id="collapsibleNavbar" className="collapse navbar-collapse ">
          <ul className="navbar-nav ml-auto navStyle">
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                ng-reflect-router-link
                href="#/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#/about">
                AboutUs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#/service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#/training">
                Training
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link dropdown-toggle text-dark">
                Workshop
              </a>
              <div aria-labelledby="navbarDropdown" className="dropdown-menu">
                <a
                  routerlink="Activate"
                  className="dropdown-item text-center text-dark"
                  href="#/workshop/xiaomi">
                  Xiaomi MI Company
                </a>
                <div className="dropdown-divider" />
                <a
                  routerlink="Activate"
                  className="dropdown-item text-center text-dark"
                  href="#/workshop/bentchair">
                  Bentchair Company
                </a>
                <div className="dropdown-divider" />
                <a
                  routerlink="Activate"
                  className="dropdown-item text-center text-dark"
                  href="#/workshop/rjit">
                  Rjit College
                </a>
                <div className="dropdown-divider" />
                <a
                  routerlink="Activate"
                  className="dropdown-item text-center text-dark"
                  href="#/workshop/mpct">
                  Mpct College
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link dropdown-toggle text-dark">
                Events
              </a>
              <div aria-labelledby="navbarDropdown" className="dropdown-menu">
                <a
                  routerlink="/event/birthday"
                  className="dropdown-item text-center text-dark"
                  href="#/event/birthday">
                  Student's Birthday
                </a>
                <div className="dropdown-divider" />
                <a
                  routerlink="/event/aniversary"
                  className="dropdown-item text-center text-dark"
                  href="#/event/aniversary">
                  Aniversary Celebration
                </a>
                <div className="dropdown-divider" />
                <a
                  routerlink="/event/tour"
                  className="dropdown-item text-center text-dark"
                  href="#/event/tour">
                  Tour's
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link dropdown-toggle text-dark">
                Placement
              </a>
              <div aria-labelledby="navbarDropdown" className="dropdown-menu">
                <a
                  routerlink="/placement"
                  className="dropdown-item text-center text-dark"
                  href="#/placement">
                  Placement Desk
                </a>
                <div className="dropdown-divider" />
                <a
                  routerlink="/placement_gallery"
                  className="dropdown-item text-center text-dark"
                  href="#/placement_gallery">
                  Placement Gallery
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#/contact">
                ContactUs
              </a>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                href="http://internship2020.pneducation.website/"
                className="nav-link text-dark">
                InternshipRegistration
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
