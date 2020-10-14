import React, { Component } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        id="mynavbar"
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="logo navbar-brand" href="/">
            Testa SRLS
          </a>

          <ul id="list" className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                BILANCIO <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/fatturaacquisto">
                FATTURA ACQUISTO
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/fatturavendita">
                FATTURA VENDITA
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/fornitori">
                FORNITORI
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="  btn  btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
