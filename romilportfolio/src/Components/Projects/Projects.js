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
        <Carousel className="projects-carousel">
          {Data.map((project) => {
            return (
              <div className="project">
                <img
                  className="carousel-image"
                  src={require(`./${project.image}`)}
                />

                <Link className="legend" to={`/projects/${project.id}`}>
                  {" "}
                  {project.name}{" "}
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
