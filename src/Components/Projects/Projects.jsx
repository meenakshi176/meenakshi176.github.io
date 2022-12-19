import React from "react";
import Card from "./Card";
import Styles from "./Project.module.css";

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
  {
    img: "https://camo.githubusercontent.com/1694eb7bc5c3ae77b69dc3921882ce0663be7afc285d9b64a16fdc8dffcad8d7/687474703a2f2f342e62702e626c6f6773706f742e636f6d2f2d4b6f70393677425550356b2f56687a6236784f705957492f41414141414141414e4f4d2f6d724b674e7769383169632f73313630302f4c4943494f55532532424c4f474f2e6a7067",
    title: "licious.in",
    description:
      "This is the clone website of Licious. it is an online Meat ordering website ",
    tech: "Tech Stack :",
    used: "HTML | CSS | JavaScript | React | Bootstrap| Chakra UI| Reuseable Components",
    github: "https://github.com/anuragg0107/freezing-roll-5661",
    blog: "https://licious-freezing.netlify.app/",
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
