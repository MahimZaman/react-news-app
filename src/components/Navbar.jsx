import { useState } from "react";

export const Navbar = ({ setCategory, setRegion }) => {
  const [menu, setMenu] = useState("general");

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Region
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item active" href="#" onClick={() => setRegion('us')}>
                USA
              </a>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${menu === "general" ? "active" : ""}`}
                aria-current="page"
                href="#"
                onClick={() => {
                  setCategory("general");
                  setMenu("general");
                }}
              >
                General
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${menu === "business" ? "active" : ""}`}
                aria-current="page"
                href="#"
                onClick={() => {
                  setCategory("business");
                  setMenu("business");
                }}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  menu === "entertainment" ? "active" : ""
                }`}
                href="#"
                onClick={() => {
                  setCategory("entertainment");
                  setMenu("entertainment");
                }}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${menu === "health" ? "active" : ""}`}
                href="#"
                onClick={() => {
                  setCategory("health");
                  setMenu("health");
                }}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${menu === "science" ? "active" : ""}`}
                href="#"
                onClick={() => {
                  setCategory("science");
                  setMenu("science");
                }}
              >
                Science
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${menu === "sports" ? "active" : ""}`}
                href="#"
                onClick={() => {
                  setCategory("sports");
                  setMenu("sports");
                }}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${menu === "technology" ? "active" : ""}`}
                href="#"
                onClick={() => {
                  setCategory("technology");
                  setMenu("technology");
                }}
              >
                Technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
