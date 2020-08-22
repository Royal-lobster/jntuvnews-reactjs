import React from "react";
import UnofficialLogo from "../Assets/UnofficialLogo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <img src={UnofficialLogo} alt="" />
      </div>
      <div className="header__hero">
        <h1 className="header__hero__h1">
          <span className="header__heroText__disclamer">News Website </span>
          <span className="header__heroText__clgName">
            of <br /> Jawaharlal Nehuru Technological University <br />{" "}
            University Collage of Engineering Vizinagaram
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Header;
