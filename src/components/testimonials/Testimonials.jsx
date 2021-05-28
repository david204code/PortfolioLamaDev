import React from "react";
import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img
              src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <img src="assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            accusamus et sequi recusandae amet illum dolor earum ad quasi
            corrupti.
          </div>
          <div className="bottom">
            <h3>Matthew</h3>
            <h4>Writer</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
