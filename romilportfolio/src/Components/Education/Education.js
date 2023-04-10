import React from "react";
import EducationCard from "../EducationCard/EducationCard";
import "./EducationStyle.css";

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <EducationCard
        imgAdd="https://img.collegedekhocdn.com/media/img/institute/crawled_images/273A1129.jpg"
        title="B.Tech In Civil Engineering"
        intership="true"
        description="I completed my four years Bachelor of Technology in civil Engineering field from GSFC University. June 2016 to June 2020. 
While doing my B.Tech course, I was involved in the three different internships to gain more knowledge in field."
      ></EducationCard>
      <EducationCard
        intership="false"
        imgAdd="https://aplicar-prod-public.s3.amazonaws.com/uploads/campus_images/e34a8d8d-c5e8-436f-adfd-fc5183ccf323/2nl6m8-campus4.jpg"
        title="PGD in Structural Steel Management And Detailing"
        description="This dynamic two-year graduate certificate course can lead me to be specialized and will provide thorough training in the detailing, supply, fabrication and installation of steel structures including the management and coordination of projects. The training is directly related to industry standards and working practices within North America and will enable me to develop detailed drawing, analytical and communication skills for the structural steel industry."
      ></EducationCard>
    </div>
  );
};

export default Education;
