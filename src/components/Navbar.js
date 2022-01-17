import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="nav-style wrapper">
      <div className="nav-container">
        <div className="logo">
          <li className="logo-li">
            <Link to="/">
              <img src="/imgs/logo-gl.svg" alt="logo geoffrey laville" />
            </Link>
          </li>
        </div>
        <div className="nav">
          <ul>
            <li className="nav-li">
              <Link to="/web">Web</Link>
            </li>
            <li className="nav-li">
              <Link to="/design">Design</Link>
            </li>
            <li className="nav-li">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default navbar;
