import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  // instead of componentDidMount() use useEffect
  useEffect(() => {
    // console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 40,
      strings: [
        "Love the Lord your God",
        "with all your Heart",
        "your Soul",
        "your Strength",
      ],
    });
  }, []);

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
            Ambassador of Christ <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
}
