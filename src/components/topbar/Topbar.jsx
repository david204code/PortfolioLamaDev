import React from "react";
import "./topbar.scss";

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          {/* logo */}
          <a href="#intro" className="logo">
            Peace be to you
          </a>
          <div className="itemContainer"></div>
        </div>
        <div className="right">Right side</div>
      </div>
    </div>
  );
}
