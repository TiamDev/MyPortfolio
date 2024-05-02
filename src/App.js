import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Cookies from "js-cookie";

function App() {
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    window.document.dir = i18n.dir();
    if (lng === "ar") {
      window.document.body.style.fontFamily = "Tajawal, Rubik ,sans-serif";
    } else {
      window.document.body.style.fontFamily = "Rubik ,sans-serif";
    }
  }, [lng, t]);
  return (
    <div id="theme">
      <Sidebar />
      <main className={lng === "ar" ? "main-rtl" : "main"}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
