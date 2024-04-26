import React, { useState } from "react";
import "./projects.css";
import Menu from "./Menu";

const Projects=()=>{
  const [items,setItem]=useState(Menu);
  const filterItem=(categoryItem)=>{
    const updateedItems=Menu.filter((curElem)=>{
      return curElem.category===categoryItem;
    });
    setItem(updateedItems);
  }
  return(
    <section className="work container section" id="projects">
      <h2 className="section__title">Projects</h2>
      <div className="work__filters">
        <span className="work__item" onClick={()=>setItem(Menu)}>All</span>
        <span className="work__item" onClick={()=>filterItem("Web")}>Web</span>
        <span className="work__item" onClick={()=>filterItem("UX/UI")}>UX/UI</span>


      </div>
      <div className="work__container grid">
        {items.map((ele)=>{
          const{id,image,title,desc,category,pic,button}=ele;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title"><a href={pic} className="work__title-link" target="_blank">{title}</a></h3>
              <p className="work__desc">{desc}</p>
              <div className="work__link-button">
               
              </div>
              {button}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Projects;
