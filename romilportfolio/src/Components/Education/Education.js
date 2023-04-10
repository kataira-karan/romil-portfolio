import React from "react";
import EducationCard from "../EducationCard/EducationCard";
import "./EducationStyle.css";

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <EducationCard></EducationCard>
      <EducationCard></EducationCard>
    </div>
  );
};

export default Education;
