import { useState } from "react";
import "../styles/components/Header.css";
import { Link } from "react-router-dom";

const Header = ({ theme, route }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src={
              theme == "white"
                ? "/assets/logo_black.png"
                : "/assets/logo_white.png"
            }
          />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className={"nav-list " + (theme == "white" ? "black_colors" : "")}>
          <li
            className={"nav-list__link " + (route == "acceuil" ? "active" : "")}
          >
            <Link to="/">ACCEUIL</Link>
          </li>
          <li className={"nav-list__link " + (route == "besoin" ? "active" : "")}>
            <Link to="/besoin">BESOIN DE SANG</Link>
          </li>
          <li className={"nav-list__link " + (route == "don" ? "active" : "")}>
            <Link to="/book">DON DE SANG</Link>
          </li>
          <li className="nav-list__link">
            <Link to="/signup">S'IDENTIFIER</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
