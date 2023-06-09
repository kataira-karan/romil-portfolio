import { React, useState, useEffect } from "react";
import "./CaseStudyStyle.css";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import p1d1i1 from "./p1d1i1.jpg";
import p1d1i2 from "./p1d1i2.jpg";
import Data from "../../data.json";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CaseStudy = () => {
  const [project, setproject] = useState({});
  const param = useParams();

  useEffect(() => {
    console.log(param);
    Data.map((project) => {
      console.log(project);
      if (param.id === project.id.toString()) {
        setproject(project);
        console.log(project);
      }
    });
  }, [project]);

  let obj = {
    id: 1,
    name: "College Canteen Design and Detailing",
    Description:
      "Currently, we have a canteen at SOT in GSFC University with a seating capacity of 96 students in an approx. Area of 282m2. The area is wholly inadequate for 1213 university students.According to NBC, the Dining area should be so designed such that it can accommodate 33.33 – 50 % of the strength of the university at a time at rate of 1.2m2 per diner.The university boys’ hostel serves 143 students and girls hostel 48 students. Each mess has an area of 143.4 m2. The mess is hygienic but it is obvious that food will be available at predetermined times only.GSFC shopping centre has 2 provision stores selling fast food items and the road adjoining the campus has 6 fast food stalls. All of these provide food items like Chinese, Bhel, and Vadapav etc. at an affordable cost but lack hygiene. Also, consuming fast food every day is detrimental to health. We have seen that, for students, one of the most pressing issues is the of lack of proper canteen facilities. The above reasons have inspired us to propose a plan for a cafeteria which will provide hygienic and quality food to all the University students. They will not have to travel elsewhere. This will save time, and money and enhance the convenience of University goers. ",
    details: [
      {
        id: 1,
        name: "Details of Existing Canteen",
        images: ["p1d1i1.jpg", "p1d1i2.jpg", "p1d1i3.jpg"],
      },
      {
        id: 2,
        name: "Survey Of GSFC University Canteen",
        images: [
          "p1d2i1.jpg",
          "p1d2i2.jpg",
          "p1d2i3.jpg",
          "p1d2i4.jpg",
          "p1d2i5.jpg",
        ],
        description:
          "We circulated a google form in the university to know the opinion of the students regarding the existing cafeteria and got the following results.Note: The scale is 0-5, i.e., Worst to Best.",
      },
      {
        id: 3,
        name: "Survey and Planning of Proposed Cafeteria",
        images: [
          "p1d3i1.jpg",
          "p1d3i2.jpg",
          "p1d3i3.jpg",
          "p1d3i4.jpg",
          "p1d3i5.jpg",
          "p1d3i6.jpg",
        ],
        description:
          "The new cafeteria is proposed at an approximate area of 917 m2. The area is sufficient and satisfies the NBC criteria. There are 25 trees which were to be incorporated in the drawing. We have tried to use the natural surroundings, i.e. trees, to our advantage. Trees provide a serene atmosphere which will be refreshing for the students after a hectic day.Our plan has a seating capacity of 152 students (on chairs), 9 randomly shaped concrete benches which can accommodate about 70 students and wooden benches which can accommodate 32 students.",
      },
    ],
  };

  return (
    <div className="cs-container">
      <span className="cs-title"> {project.name} </span>
      <div className="cs-images">
        {project.images
          ? project.images.map((img) => {
              return <img className="cs-image" src={require(`./${img}`)}></img>;
            })
          : null}
      </div>
      <span className="cs-description">{project.Description}</span>

      {project &&
        project.details &&
        project.details.map((detail) => {
          return (
            <div>
              <span className="cs-title"> {detail.name} </span>
              <div className="cs-details-images">
                {/* {detail.images.map((i)=>{

              })} */}
                <Carousel className="caro">
                  {detail.images
                    ? detail.images.map((image) => {
                        return (
                          <div className="cs-carousel-image-container">
                            <img
                              className="cs-carousel-image"
                              src={require(`./${image.image}`)}
                            />
                            <p className="legend">{image.title}</p>
                          </div>
                        );
                      })
                    : null}
                </Carousel>
              </div>
            </div>
          );
        })}

      {/* <Carousel className="cs-carousel">
        <div className="cs-carousel-image">
          <img src="https://wallpapers.com/images/featured/0x148xb5hbkabmqu.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://wallpapers.com/images/featured/0x148xb5hbkabmqu.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://wallpapers.com/images/featured/0x148xb5hbkabmqu.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}
    </div>
  );
};

export default CaseStudy;
