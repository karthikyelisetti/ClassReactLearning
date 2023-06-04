import React from "react";
import "../css/Header.css"

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="#">
            Karthik Yelisetti
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{width: '240px'}}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button className="btn btn-outline-success" type="submit">
                Login
              </button>
              <button className="btn btn-outline-success" type="submit">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
