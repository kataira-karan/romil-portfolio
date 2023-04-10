import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./ProjectsStyle.css";
import { Carousel } from "react-responsive-carousel";
import Data from "../../data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects">
        <h2>Some Of My Work</h2>
        <Carousel className="projects-carousel">
          {Data.map((project) => {
            return (
              <div className="project">
                <img
                  className="carousel-image"
                  src="https://wallpapers.com/images/featured/0x148xb5hbkabmqu.jpg"
                />

                <p className="legend">
                  <Link to={`/projects/${project.id}`}> {project.name} </Link>
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
