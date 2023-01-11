import React from "react";
import Card from "./Card";
import Styles from "./Project.module.css";

const projectObj = [
  {
    img: "https://vinitshahilverma.github.io/images/ezgif.com-gif-maker.gif",
    title: "interntheory.com",
    description:
      "An Ecommerce web application to Certified Online Courses Upgrade your skills with Intern Theory's online learning platform",
    blog: "https://medium.com/@meenakshisinghthakur4668/clone-of-an-intern-theory-website-d247bd1a2069",
  },
  {
    img: "https://d314ueg0lpx3nd.cloudfront.net/banner/7a2125e5fe2-Best-Buy-banner_1.gif",
    title: "PharmEasy.com",
    description:
      " An advanced pharmacy ecosystem with online clinic bookings, data collection.",
    blog: "https://medium.com/@meenakshisinghthakur4668/clone-of-e-commerce-website-bd7092fec554",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png",
    title: "licious.in",
    description: " It is an online Meat ordering website .",
    blog: "https://licious-freezing.netlify.app/",
  },
];

function Blogs() {
  return (
    <section id="blogs">
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
    </section>
  );
}

export default Blogs;
