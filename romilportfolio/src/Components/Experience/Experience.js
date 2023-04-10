import React from "react";
import "./ExperienceStyle.css";
import EducationCard from "../EducationCard/EducationCard";

const Experience = () => {
  const role = [
    "Client Accounts Handling - Creating accounts and integrating products and other integration",
    "Products Mapping || Evaluation status || Cname creation for Custom Domain URL || Email id for comm. (AWS) integration ||  Forwarding Credits of the Clients to Reporting Manager from Clients/ BDM        ",
    "Being up-to-date with the changes taking place in the courses/tests.",
    "Ensuring confidentially of project related information and maintaining the project records (e-mails, google drive data on hard drive and hard-copies) with care.        ",
    "Coming up with new ways/processes which may lead to waste reduction (time, money and efforts).        ",
    "Coordination with the account department for wallet balance and also sharing account history for cross verification of credit and debit data.",
    "Coordinating with Clients of the other team counterpart for any queries as and when needed.        ",
    "Coordination with the account department for wallet balance and also sharing account history for cross verification of credit and debit data.",
  ];
  return (
    <div className="experience-container">
      <EducationCard
        title="Kanan.co"
        imgAdd="https://scontent.fykz1-1.fna.fbcdn.net/v/t39.30808-6/300617045_441127381371513_271146968818527040_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wcOajEmC4aUAX83lXs0&_nc_ht=scontent.fykz1-1.fna&oh=00_AfBpfXSlXpq0zPKJUwyfOkCgJQsCNwxtQT1BbsSWcyfyrA&oe=64387586"
        internship="false"
        role={role}
        description="I was responsible for providing technical assistance and support to customers who experience technical issues with products or services. The main duty of my role was to resolve customer as well as employees working in the organization issues by providing solutions and troubleshooting techniques, while ensuring customer satisfaction and maintaining the reputation of the organization."
      ></EducationCard>
    </div>
  );
};

export default Experience;
