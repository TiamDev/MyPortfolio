import React from "react";
import "./about.css";
import AboutPic from "../../assets/juicy-woman-with-laptop-and-new-business-idea (1).gif";
const About=()=>{
  let CVFileURL = "http://localhost:3000/Fatima Bakran.pdf";function DownloadCv(CVFileURL) {
    const fileName = CVFileURL.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = CVFileURL;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return(
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={AboutPic} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I am a web developer specializing in front-end and back-end development, as well as database management. I strive to create a unique user experience by implementing artistic touches that attract users and make the application easy to use. I am always seeking self-improvement and acquiring new knowledge and skills. My constant goal is to achieve professionalism in my work and provide innovative technological solutions.            </p>
            <button className="btn"  onClick={() => {
                      DownloadCv(CVFileURL);
                    }}>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
