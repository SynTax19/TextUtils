import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // var tMode = "";
  // if (props.mode === "dark") tMode = "light";
  // else tMode = "dark";

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Competitive Programming
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              type="checkbox"
              onClick={props.toggleMode}
              className="form-check-input"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "light" ? "dark" : "light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
