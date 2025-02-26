import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./assets/img/logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md fixed-top navbar-shrink py-3"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logoImg}
            alt="Brand Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span>CampusCart</span>
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdow">
              <a className="nav-link dropdown-toggle" href="/index.html">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/features.html"
                id="freelanceDr</li>opdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Freelance
              </a>
              <ul className="dropdown-menu" aria-labelledby="freelanceDropdown">
                <li>
                  <a className="dropdown-item" href="/subpage3.html">
                    Subpage 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/subpage4.html">
                    Subpage 4
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/features.html"
                id="freelanceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marketplace
              </a>
              <ul className="dropdown-menu" aria-labelledby="freelanceDropdown">
                <li>
                  <a className="dropdown-item" href="/subpage3.html">
                    Subpage 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/subpage4.html">
                    Subpage 4
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/features.html"
                id="freelanceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Carrier guidance
              </a>
              <ul className="dropdown-menu" aria-labelledby="freelanceDropdown">
                <li>
                  <a className="dropdown-item" href="/subpage3.html">
                    Subpage 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/subpage4.html">
                    Subpage 4
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/features.html"
                id="freelanceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Communities and groups
              </a>
              <ul className="dropdown-menu" aria-labelledby="freelanceDropdown">
                <li>
                  <a className="dropdown-item" href="/subpage3.html">
                    Subpage 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/subpage4.html">
                    Subpage 4
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <a
            className="btn btn-primary shadow"
            role="button"
            href="signup.html"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
