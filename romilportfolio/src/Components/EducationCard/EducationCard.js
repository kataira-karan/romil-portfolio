import React from "react";
import "./EducationCardStyle.css";
import { Link } from "react-router-dom";

const EducationCard = (props) => {
  const { title, description, imgAdd, intership } = props;

  return (
    <div className="education-card-container">
      <div className="education-card-image-container">
        <img className="education-card-image" src={imgAdd}></img>
      </div>

      <div className="education-card-description-container">
        <span className="education-card-header">{title}</span>
        <span className="education-card-description">{description}</span>

        {intership === "true" ? (
          <ul className="internships-container">
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EducationCard;
