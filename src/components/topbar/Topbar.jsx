import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          {/* logo */}
          <a href="#intro" className="logo">
            Peace be to you
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+908772</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>example@mail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
