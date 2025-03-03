import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./assets/img/learnshop.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md fixed-top navbar-shrink   py-3 bg-dark"
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
          <span>
            <span style={{ color: "#d87e07", fontWeight:"bold"}}>Le</span>
            <span className="text-white font-bold">Earn</span>
          </span>
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
          style={{ borderColor: "#d87e07" }}
        >
          <span className="visually-hidden text-white" >Toggle navigation</span>
          <span className="navbar-toggler-icon " style={{
      filter:
        "invert(47%) sepia(86%) saturate(728%) hue-rotate(10deg) brightness(95%) contrast(90%)",
    }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav mx-auto bg-dark" >
            <li className="nav-item dropdow">
              <a
                className="nav-link dropdown-toggle text-white "
                href="/index.html"
                
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
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
                  subpage1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/subpage4.html">
                   subpage2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="/features.html"
                id="freelanceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marketplace
              </a>
              <ul
                className="dropdown-menu "
                aria-labelledby="freelanceDropdown"
              >
                <li>
                  <a className="dropdown-item " href="/subpage3.html">
                    Subpage 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/subpage4.html">
                    Subpage 2
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
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
                    Subpage 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/subpage4.html">
                    Subpage 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <a
            className="btn btn-primary shadow text-white"
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
