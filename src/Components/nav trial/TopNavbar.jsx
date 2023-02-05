import React, { useState, useEffect } from "react";
import "./topnavbar.css";

const TopNavbar = ({ inView }) => {
  const [isactiveNav, setActiveNav] = useState("#");

  useEffect(() => {
    setActiveNav(inView);
  }, [inView]);

  const [showNav, setShowNav] = useState(() => null);

  return (
    <nav className="TopNavBar ">
      <ul className="TopNavBar-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        <div className="menu">
          <li>
            <a
              href={"/#"}
              onClick={() => setActiveNav("#")}
              className={isactiveNav === "#" ? "active" : ""}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href={"#about"}
              onClick={() => setActiveNav("#about")}
              className={isactiveNav === "#about" ? "active" : ""}
            >
              About
            </a>
          </li>

          <li>
            <a
              href={"#education"}
              onClick={() => setActiveNav("#education")}
              className={isactiveNav === "#education" ? "active" : ""}
            >
              Education
            </a>
          </li>

          <li>
            <a
              href={"#skills"}
              onClick={() => setActiveNav("#skills")}
              className={isactiveNav === "#skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href={"#projects"}
              onClick={() => setActiveNav("#projects")}
              className={isactiveNav === "#projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href={"#blogs"}
              onClick={() => setActiveNav("#blogs")}
              className={isactiveNav === "#blogs" ? "active" : ""}
            >
              Blogs
            </a>
          </li>

          <li>
            <a
              href={"#stats"}
              onClick={() => setActiveNav("#stats")}
              className={isactiveNav === "#stats" ? "active" : ""}
            >
              Statistics
            </a>
          </li>

          <li>
            <a
              href={"#contact"}
              onClick={() => setActiveNav("#contact")}
              className={isactiveNav === "#contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
          <li
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1MUX15I0uKRXcv1jb_r7OSQ9Ty3oUGguV?usp=sharing"
              )
            }
          >
            <a
              href="https://drive.google.com/uc?id=1PcIVv7UnTchVx_yy6IUV8iczZwR1d5yB&export=download"
              style={{ color: "#F88119" }}
            >
              Resume
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default TopNavbar;
