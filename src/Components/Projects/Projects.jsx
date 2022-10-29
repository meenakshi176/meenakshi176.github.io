import React from "react";
import Card from "./Card";
import Styles from "./Project.module.css";
import pic1 from "../../Images/animoto.png";

const projectObj = [
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.XKOZJvbK4ZylnSh8raOdNAHaDr&pid=Api&P=0",
    title: "interntheory.com",
    description:
      "An Ecommerce web application to Certified Online Courses Upgrade your skills with Intern Theory's online learning platform",
    tech: "Tech Stack :",
    used: "HTML | CSS | JavaScript | Local Storage | Reuseable Components",
    github: "https://github.com/vinitshahilverma/Intern-Theory-Project",
    blog: "https://venerable-moxie-7fca57.netlify.app/",
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.HxshjhLHZTe62JI-6443KwHaEU&pid=Api&P=0",
    title: "PharmEasy.com",
    description:
      " An advanced pharmacy ecosystem with online clinic bookings, data collection.",
    tech: "Tech Stack :",
    used: "HTML | CSS | JavaScript | Local Storage | Reauseable Components",
    github: "https://github.com/meenakshi176/Pharmacy_Clone",
    blog: " https://gleaming-haupia-a989a3.netlify.app/",
  },
];

function Projects() {
  return (
    <div className={`${Styles.Project} section`}>
      <div>
        <h1 className="heading">Projects</h1>
      </div>
      <div className={Styles.Project__showcase}>
        {projectObj.map((proj) => (
          // <a href={proj.github} target="_blank">
          <Card key={proj.title} {...proj} tech={proj.tech} used={proj.used} />
          // </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
