import React from "react";
import AboutMe from "./Components/About/About";
import Home from "./Components/Main/Header";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";
import Statistics from "./Components/Statitics/statitics";
import TopNavbar from "./Components/nav trial/TopNavbar";
import "./App.css";

import { Link, Element } from "react-scroll";
import Blogs from "./Components/Blogs/Blogs";

const router = [
  {
    to: "Home",
    component: <Home />,
  },
  {
    to: "aboutme",
    component: <AboutMe />,
  },
  {
    to: "education",
    component: <Education />,
  },
  {
    to: "skills",
    component: <Skills />,
  },
  {
    to: "projects",
    component: <Projects />,
  },
  {
    to: "blogs",
    component: <Blogs />,
  },
  {
    to: "statitics",
    component: <Statistics />,
  },
  {
    to: "contact",
    component: <Contact />,
  },
];

function App() {
  return (
    <div className="App">
      <TopNavbar />
      {router.map((item) => (
        <Element name={item.to}>{item.component}</Element>
      ))}
      <Footer />
    </div>
  );
}

export default App;
