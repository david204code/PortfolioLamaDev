import React from "react";
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="ImageOfaMan" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>David Wu</h1>
          <h3>
            Ambassador of Christ <span>Worshipper</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
}
