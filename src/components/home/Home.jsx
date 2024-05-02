import React from "react";
import "./home.css";
import Me from "../../assets/Logo.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import { t } from "i18next";
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">{t("Fatima Bakran")}</h1>
        <span className="home__education">{t("Web developer")}</span>

        <HeaderSocials />
        <a href="#contact" className="btn">
          {t("Let’s Connect")}
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};
export default Home;
