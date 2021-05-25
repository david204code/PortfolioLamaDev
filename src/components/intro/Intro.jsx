import React from "react";
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="Picture of a man" />
        </div>
      </div>
      <div className="right">right</div>
    </div>
  );
}
