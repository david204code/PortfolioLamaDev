import React from "react";
import "./topbar.scss";

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          {/* logo */}
          <a href="#intro">Logo</a>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
