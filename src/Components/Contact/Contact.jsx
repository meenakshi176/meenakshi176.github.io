import React from "react";
import Styles from "./Contact.module.css";

const contactObj = [
  {
    socialMedia: <i className="fas fa-envelope"></i>,
    url: "meenakshisinghthakur4668@gmail.com",
  },
  {
    socialMedia: <i className="fab fa-linkedin"></i>,
    url: "https://www.linkedin.com/in/meenakshi-singh-thakur-8b60a5220/",
  },
  {
    socialMedia: <i className="fab fa-github"></i>,
    url: "https://github.com/meenakshi176",
  },
  {
    socialMedia: <i className="fab fa-github"></i>,
    url: "https://medium.com/@meenakshisinghthakur4668",
  },
];

function Contact() {
  return (
    <div className={`${Styles.Contact}`}>
      <div>
        <h1 className="heading">Contact</h1>
      </div>
      <div className={Styles.ContactSectionDiv}>
        {contactObj.map((item) => (
          <a href={item.url} target="_blank">
            <div className={Styles.ContactSection}>
              <p>{item.socialMedia}</p>
              <p>{item.url}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
