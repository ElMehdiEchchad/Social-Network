import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="col-10">
        <Link to="/" className="navbar-brand">Social netwok application</Link>
        </div>
        <div class="col-2">
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Profil</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}