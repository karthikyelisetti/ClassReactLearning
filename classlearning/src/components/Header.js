import React from "react";
import "./Header.css";
import Footer from "./Footer";

// export default function Header({myname, mynumber, mysalutation, myage, copyright}) { // directly destructing the components
export default function Header({name, setName}) {
  // destructing the props

  function handleClick() {
    setName("HeroVired");
  }
  return (
    
    <div>
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}
      {/* My name is {props.myname}
      My num is {props.mynumber} */}
      {/* {mysalutation}, My name is {myname}
      My age is {myage} and num is {mynumber} */}
      {/* <Footer copyright={copyright}></Footer> */}

      This is header: Welcome to react
      <div>
        your name is: {name}
        <button onClick={handleClick}>Change Name</button>
      </div>
    </div>
  );
}
