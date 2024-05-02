import React, { useState } from "react";
import "./projects.css";
import Menu from "./Menu";
import { t } from "i18next";

const Projects = () => {
  const [items, setItem] = useState(Menu);
  const [navItem, setNavItem] = useState(0);
  const filterItem = (categoryItem) => {
    const updateedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItem(updateedItems);
  };
  return (
    <section className="work container section" id="projects">
      <h2 className="section__title">{t("Projects")}</h2>
      <div className="work__filters">
        <span
          className={navItem === 0 ? "work__item active" : "work__item"}
          onClick={() => {
            setItem(Menu);
            setNavItem(0);
          }}
        >
          {t("All")}
        </span>
        <span
          className={navItem === 1 ? "work__item active" : "work__item"}
          onClick={() => {
            filterItem("Web");
            setNavItem(1);
          }}
        >
          {t("Web")}
        </span>
        <span
          className={navItem === 2 ? "work__item active" : "work__item"}
          onClick={() => {
            filterItem("UX/UI");
            setNavItem(2);
          }}
        >
          {t("UX/UI")}
        </span>
      </div>
      <div className="work__container grid">
        {items.map((ele) => {
          const { id, image, title, desc, category, pic, button } = ele;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">
                <a href={pic} className="work__title-link" target="_blank">
                  {t(title)}
                </a>
              </h3>
              <p className="work__desc">{desc}</p>
              <div className="work__link-button"></div>
              {button}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
