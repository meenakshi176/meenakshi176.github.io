import React from "react";
import Card from "./EduCard";
import Styles from "./Education.module.css";

const projectObj = [
  {
    title: "FULL-STACK WEB DEVELOPMENT",
    time: "April 2022 | Present",
    description: "MASAI SCHOOL BENGALURU, KA. ",
  },
  {
    title: "Master of Mathematics",
    time: "JUNE 2020 ",
    description: "Rani Durgawati Universiry Jabalpur ",
  },
  {
    title: "Bachelor of Computer Science",
    time: "JUNE 2018",
    description: "Rani Durgawati Universiry Jabalpur",
  },
];

function Education() {
  return (
    <div className={`${Styles.Education} section`}>
      <div>
        <h1 className="heading">Education</h1>
      </div>
      <div className={Styles.Education__showcase}>
        {projectObj.map((proj) => (
          <a href={proj.github} target="_blank">
            <Card key={proj.title} {...proj} time={proj.time} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Education;
