import Work1 from "../../assets/projects/Cover_1.svg";
import Pic1 from "../../assets/projects/pic1.png";

import Work2 from "../../assets/projects/Cover_2.svg";
import Pic2 from "../../assets/projects/pic2.png";

import Work3 from "../../assets/projects/Cover_3.svg";
import Pic3 from "../../assets/projects/pic3.png";

import Work4 from "../../assets/projects/Cover_4.svg";
import Pic4 from "../../assets/projects/pic4.png";

import Work5 from "../../assets/projects/Cover_5.svg";
import Pic5 from "../../assets/projects/pic5.jpg";

import Work6 from "../../assets/projects/Cover_6.svg";
import Pic6 from "../../assets/projects/pic6.png";

import Work7 from "../../assets/projects/Cover_7.svg";
import Pic7 from "../../assets/projects/pic7.jpg";

import Work8 from "../../assets/projects/Cover (24).svg";
import Pic8 from "../../assets/projects/screencapture-localhost-3000-2024-05-02-04_11_32.png";

import Work9 from "../../assets/projects/Cover_99.png";
import Pic9 from "../../assets/projects/pic9.jpg";

import Work11 from "../../assets/projects/Cover (26).svg";
import Pic11 from "../../assets/projects/Thumbnail (4).svg";
import Work10 from "../../assets/projects/Cover (27).svg";
import Pic10 from "../../assets/projects/Thumbnail (7).svg";

const Menu = [
  {
    id: 1,
    image: Work5,
    pic: Pic5,
    title: "OGMS",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-square-js"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-solid fa-c">#</i>
        <i class="fa-solid fa-database" title="Sqlserver"></i>
      </div>
    ),
    // button:<div >
    //         <a href="#" className="work__button" title="View Website">
    //           <i className="icon-link work__button-icon"></i>
    //         </a>
    //         <a href="#" className="work__button work__button-github" title="View Code">
    //           <i className="fa-brands fa-github work__button-icon"></i>
    //         </a>    </div>,
    category: "Web",
  },
  {
    id: 2,
    image: Work7,
    pic: Pic7,
    title: "DoTask",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-square-js"></i>
      </div>
    ),
    button: (
      <div>
        <a
          href="https://github.com/TiamDev/DoTask"
          className="work__button work__button-github"
          title="View Code"
        >
          <i className="fa-brands fa-github work__button-icon"></i>
        </a>
        <a
          href="https://tiamdev.github.io/DoTask/"
          className="work__button"
          title="View Website"
        >
          <i className="icon-link work__button-icon"></i>
        </a>
      </div>
    ),
    category: "Web",
  },
  {
    id: 3,
    image: Work6,
    pic: Pic6,
    title: "Sonrisa",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-square-js"></i>
        <i class="fa-brands fa-bootstrap"></i>
      </div>
    ),
    button: (
      <div>
        <a
          href="https://tiamdev.github.io/sonrisa/"
          className="work__button work__button-github"
          title="View Code"
        >
          <i className="fa-brands fa-github work__button-icon"></i>
        </a>
        <a
          href="https://github.com/TiamDev/sonrisa"
          className="work__button"
          title="View Website"
        >
          <i className="icon-link work__button-icon"></i>
        </a>
      </div>
    ),
    category: "Web",
  },
  {
    id: 4,
    image: Work4,
    pic: Pic4,
    title: "Foody",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-square-js"></i>
      </div>
    ),
    button: (
      <div>
        <a
          href="https://github.com/TiamDev/foodi"
          className="work__button work__button-github"
          title="View Code"
        >
          <i className="fa-brands fa-github work__button-icon"></i>
        </a>
        <a
          href="https://tiamdev.github.io/foodi"
          className="work__button"
          title="View Website"
        >
          <i className="icon-link work__button-icon"></i>
        </a>
      </div>
    ),
    category: "Web",
  },
  {
    id: 5,
    image: Work3,
    pic: Pic3,
    title: "Mostaql Clone",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-square-js"></i>
        <i class="fa-brands fa-bootstrap"></i>
      </div>
    ),
    button: (
      <div>
        <a
          href="https://github.com/TiamDev/Mostaql_clone"
          className="work__button work__button-github"
          title="View Code"
        >
          <i className="fa-brands fa-github work__button-icon"></i>
        </a>
        <a
          href="https://tiamdev.github.io/Mostaql_clone/"
          className="work__button"
          title="View Website"
        >
          <i className="icon-link work__button-icon"></i>
        </a>
      </div>
    ),
    category: "Web",
  },
  {
    id: 6,
    image: Work9,
    pic: Pic9,
    title: "NAFAS App",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-figma"></i>
      </div>
    ),
    button: (
      <div>
        {/* <a href="https://tiamdev.github.io/sonrisa/" className="work__button work__button-github" title="View Code">
                  <i className="fa-brands fa-github work__button-icon"></i>
                </a> 
                <a href="https://github.com/TiamDev/sonrisa" className="work__button" title="View Website">
                  <i className="icon-link work__button-icon"></i>
                </a> */}
      </div>
    ),
    category: "UX/UI",
  },
  {
    id: 7,
    image: Work2,
    pic: Pic2,
    title: "fourSeasons",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-square-js"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-brands fa-php"></i>
        <i class="fa-solid fa-database" title="mySQL"></i>
      </div>
    ),
    button: (
      <div>
        <a
          href="https://github.com/TiamDev/mini_project_four_seasons"
          className="work__button work__button-github"
          title="View Code"
        >
          <i className="fa-brands fa-github work__button-icon"></i>
        </a>
        {/* <a href="#" className="work__button" title="View Website">
              <i className="icon-link work__button-icon"></i>
            </a> */}
      </div>
    ),
    category: "Web",
  },
  {
    id: 8,
    image: Work1,
    pic: Pic1,
    title: "Maqar Platform",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-square-js"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-brands fa-laravel"></i>
        <i class="fa-solid fa-database" title="MySQL"></i>
      </div>
    ),
    button: (
      <div>
        <a
          href="https://github.com/TiamDev/bootcamp-final-project-Maqar-platform"
          className="work__button work__button-github"
          title="View Code"
        >
          <i className="fa-brands fa-github work__button-icon"></i>
        </a>
        {/* <a href="#" className="work__button" title="View Website">
              <i className="icon-link work__button-icon"></i>
            </a> */}
      </div>
    ),
    category: "Web",
  },
  {
    id: 9,
    image: Work8,
    pic: Pic8,
    title: "My Portfolio",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-react"></i>
      </div>
    ),
    button: (
      <div>
        <a
          href="https://github.com/TiamDev/MyPortfolio"
          className="work__button work__button-github"
          title="View Code"
        >
          <i className="fa-brands fa-github work__button-icon"></i>
        </a>
      </div>
    ),
    category: "Web",
  },
  {
    id: 10,
    image: Work10,
    pic: Pic10,
    title: "FITBODY",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-square-js"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-brands fa-laravel"></i>
        <i class="fa-solid fa-database" title="MySQL"></i>
        <span style={{ paddingLeft: "10px", fontSize: "20px" }}>API</span>
      </div>
    ),

    category: "Web",
  },
  {
    id: 11,
    image: Work11,
    pic: Pic11,
    title: "Taskaty",
    desc: (
      <div className="tools">
        <i class="fa-brands fa-react"></i>
      </div>
    ),
    button: (
      <div>
        <a
          href="https://github.com/TiamDev/taskaty"
          className="work__button work__button-github"
          title="View Code"
        >
          <i className="fa-brands fa-github work__button-icon"></i>
        </a>
        <a
          href="https://mytaskaty.netlify.app/"
          className="work__button"
          title="View Website"
        >
          <i className="icon-link work__button-icon"></i>
        </a>
      </div>
    ),
    category: "Web",
  },
].sort((a, b) => {
  return b.id - a.id;
});
export default Menu;
