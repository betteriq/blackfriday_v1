import React from "react";
import "./About.css";
import Nav from "../../Navbar/Nav";
import Footers from "../../footer/Footers";
function About() {
  return (
    <div className="about">
      <Nav/>
      <div className="about_tpone">
        <div className="about_tpone_index">
          <h1>About</h1>
        </div>
      </div>
      <div className="about_tptwo">
        <div className="about_tptwo_index"></div>
      </div>
      <Footers/>
    </div>
  );
}

export default About;
