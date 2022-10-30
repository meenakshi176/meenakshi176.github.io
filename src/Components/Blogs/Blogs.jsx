import React from "react";
import Card from "./Card";
import Styles from "./Project.module.css";

const projectObj = [
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.XKOZJvbK4ZylnSh8raOdNAHaDr&pid=Api&P=0",
    title: "interntheory.com",
    description:
      "An Ecommerce web application to Certified Online Courses Upgrade your skills with Intern Theory's online learning platform",
 
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.HxshjhLHZTe62JI-6443KwHaEU&pid=Api&P=0",
    title: "PharmEasy.com",
    description:
      " An advanced pharmacy ecosystem with online clinic bookings, data collection.",
  }
];

function Blogs() {
  return (
    <div className={`${Styles.Project} section`}>
      <div>
        <h1 className="heading">Blogs</h1>
      </div>
      <div className={Styles.Project__showcase}>
        {projectObj.map((proj) => (
          <a href={proj.blog} target="_blank">
            <Card key={proj.title} {...proj} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
