import React from "react";
import "./HomeStyle.css";
import { Link } from "react-router-dom";

import Project from "../Projects/Projects";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <img
          src="https://wallpapers.com/images/featured/0x148xb5hbkabmqu.jpg"
          className="banner-image"
        ></img>
        <span className="name">Romil Bhatt</span>
        <ul className="navigation">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>

      <div className="home-content">
        <div className="home-image-container">
          <img
            className="home-image"
            src="https://images.pexels.com/photos/15597897/pexels-photo-15597897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>

        <div className="home-description-container">
          <h2 className="head">About Me</h2>
          <span className="about-me">
            My Name is Romil Bhatt and I am a student at Conestoga College
            studying steel structural management and detailing. I am an eager
            and inquisitive student skilled in{" "}
            <span className="software"> computer aided design</span>
            <span className="software"> AUTOCAD</span>
            <span className="software"> REVIT</span> ,
            <span className="software"> TEKLA</span>
            <span className="software"> STAAD-PRO </span> and
            <span className="software"> ETABS</span>
            REVIT, TEKLA, STAAD-PRO and ETABS, looking to obtain a full time
            offer that offers experience in industry.
            <br></br>I am fascinated by focusing not only on the qualities of
            products but also on the development of the process for making them.
            Converting a concept into a complex, high – technology products
            excites me and I plan on incorporating my strength into a company’s
            mission.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
