import React from "react";

import Styles from "../Education/Education.module.css";
import Card from "../Education/EduCard";

const ExpObj = [
  {
    title: "Database Management Intern",
    time: "June 2023 | August 2023",
    description: "Material Depot Pvt Ltd Bengluru, Karnatka",
  },
  {
    title: "Software Developer Intern",
    time: "September 2023 | Present ",
    description: "Wishfy Software Technology Noida Uttar Pradesh",
  },
];

const Experience = () => {
  return (
    <div className={`${Styles.Education} section`}>
      <div>
        <h1 className="heading">Experience</h1>
      </div>
      <div className={Styles.Education__showcase}>
        {ExpObj.map((proj) => (
          <a href={proj.github} target="_blank">
            <Card key={proj.title} {...proj} time={proj.time} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
