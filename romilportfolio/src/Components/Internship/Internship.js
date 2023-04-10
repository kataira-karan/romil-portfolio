import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InternshipStyle.css";
import Data from "../../Internship.json";

const Internship = () => {
  const param = useParams();
  const [interns, setinterns] = useState({});

  useEffect(() => {
    console.log(param);

    Data.map((intenship) => {
      console.log(intenship);
      if (param.id === intenship.id.toString()) {
        setinterns(intenship);
        console.log(interns);
      }
    });
  }, [interns]);

  return (
    <div className="internship-container">
      <span className="internship-header">{interns.name}</span>
      <hr className="bottom-border"></hr>
      <span className="internship-description">
        <span className="internship-header">Description</span>
        {interns.description}
      </span>
      <span className="internship-description">
        <span className="internship-header">Roles And Responsibilities</span>
        {interns.role
          ? interns.role.map((r) => {
              return <span> {r} </span>;
            })
          : null}
      </span>
      <div className="internship-images">
        {interns.images
          ? interns.images.map((img) => {
              return (
                <div className="internship-image-container">
                  <img
                    className="internship-image"
                    src={require(`./${img}`)}
                  ></img>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Internship;
