import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/Logo.svg";
import Translate from "../../assets/translate-svgrepo-com.svg";
import DarkMode from "./DarkMode";
import i18next from "i18next";
import Cookies from "js-cookie";
const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  const mode = Cookies.get("mode") || "dark";
  const [theme, setTheme] = useState(mode);
  let changeTheme = theme === "light" ? "#000" : "#fff";
  const lng = Cookies.get("i18next") || "ar";
  return (
    <>
      <aside
        className={
          lng === "ar"
            ? toggle
              ? "aside-rtl show-menu-rtl"
              : "aside-rtl"
            : toggle
            ? "aside show-menu"
            : "aside"
        }
      >
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-female"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="icon-puzzle"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <button
            className=""
            onClick={() => {
              if (lng === "en") {
                i18next.changeLanguage("ar");
              } else {
                i18next.changeLanguage("en");
              }
            }}
            title={lng === "ar" ? "العربية" : "English"}
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill={changeTheme}
              className="bi bi-translate nav__img"
            >
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
            </svg>
          </button>
          <DarkMode setTheme={setTheme} theme={theme}></DarkMode>
        </div>
      </aside>
      <div
        className={
          lng === "ar"
            ? toggle
              ? "nav__toggle-rtl nav__toggle-open-rtl"
              : "nav__toggle-rtl"
            : toggle
            ? "nav__toggle nav__toggle-open"
            : "nav__toggle"
        }
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};
export default Sidebar;
