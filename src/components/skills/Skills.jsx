import React from "react";
import "./skills.css";
import  HTML from "../../assets/skills/html.svg";
import CSS from "../../assets/skills/css.svg";
import JS from "../../assets/skills/js.svg";
import PHP from "../../assets/skills/Php.png";
import Laravel from "../../assets/skills/laravel.svg";
import REACT from "../../assets/skills/react.svg";
import MySql from "../../assets/skills/mysql.svg";
import Figma from "../../assets/skills/figma.svg";
import Git from "../../assets/skills/git.svg";
import Bootstrap from "../../assets/skills/Bootstrap.svg";
import { t } from "i18next";

const data=[
  {id:1,image:HTML,title:"HTML"},
  {id:2,image:CSS,title:"CSS"},
  {id:3,image:JS,title:"js"},
  {id:10,image:Bootstrap,title:"Bootstrap"},
  {id:4,image:REACT,title:"React"},
  {id:5,image:PHP,title:"php"},
  {id:6,image:Laravel,title:"Laravel"},
  {id:7,image:MySql,title:"MySql"},
  {id:8,image:Figma,title:"Figma"},
  {id:9,image:Git,title:"git"},



];
const Skills=()=>{
  return(
    <section className="skills container section" id="skills">
      <h2 className="section__title">{t("My Skills")}</h2>
      <div className="skills__container grid">
        {data.map(({id,image,title})=>{
          return(
            <div className="skills__card" key={id}>
              <img src={image} alt="" title={title}  className="skills__img"/>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Skills;
