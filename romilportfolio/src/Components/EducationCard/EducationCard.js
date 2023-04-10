import React from "react";
import "./EducationCardStyle.css";
import { Link } from "react-router-dom";

const EducationCard = () => {
  return (
    <div className="education-card-container">
      <div className="education-card-image-container">
        <img
          className="education-card-image"
          src="https://images.pexels.com/photos/4041122/pexels-photo-4041122.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        ></img>
      </div>

      <div className="education-card-description-container">
        <span className="education-card-header">B.Tech in Civil</span>
        <span className="education-card-description">
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheetn
        </span>

        <ul className="internship-container">
          <li>
            <Link to="/education/internship/1">
              {" "}
              Intern-Site Supervisor at Agora City Center{" "}
            </Link>
          </li>
          <li>
            <Link to="/education/internship/2">
              Intern-Site Engineer at Cube Construction Private Limited
            </Link>
          </li>
          <li>
            <Link to="/education/internship/3">
              {" "}
              Intern-Site Engineer at GSFC Private Limited{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EducationCard;
