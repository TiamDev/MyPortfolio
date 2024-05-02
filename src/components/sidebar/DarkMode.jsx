import React, { useState } from "react";
import DarkModeImg from "../../assets/dark-mode-night-moon-svgrepo-com.svg";
import LightModeImg from "../../assets/light-mode-svgrepo-com.svg";
import Cookies from "js-cookie";

const DarkMode = (props) => {
  const [theme, setTheme] = useState(props.theme);
  const mode = Cookies.get("mode") || "dark";
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    Cookies.set("mode", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    Cookies.set("mode", "light");
  };
  if (mode === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }
  const togglekTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      props.setTheme("dark");
      setDarkMode();
    } else {
      setTheme("light");
      props.setTheme("light");

      setLightMode();
    }
  };
  return (
    <button>
      <img
        src={mode === "dark" ? LightModeImg : DarkModeImg}
        alt=""
        className="nav__img"
        onClick={togglekTheme}
      />
    </button>
  );
};
export default DarkMode;
