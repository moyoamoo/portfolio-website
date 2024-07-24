import "../css/header.scss";
import { useState } from "react";
import eightBitMoyo from "../assets/8bitmoyo.png";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <header>
        <nav className="menu-container">
          <div className={openMenu ? "show-menu" : "menu"}>
            <img src={eightBitMoyo} alt="" />
            <ul className="menu-link-list">
              <li>
                <Link
                  to="#about-me"
                  className="menu-link"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="#projects"
                  className="menu-link"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  My Projects
                </Link>
              </li>
              <li>
                <Link
                  to="#contact-me"
                  className="menu-link"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Get in Contact
                </Link>
              </li>
            </ul>
          </div>
          <button type="button" className="hamburger" onClick={toggleMenu}>
            <span className={openMenu ? "ham-line active" : "ham-line"}></span>
            <span className={openMenu ? "ham-line active" : "ham-line"}></span>
            <span className={openMenu ? "ham-line active" : "ham-line"}></span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
