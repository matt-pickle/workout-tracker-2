import React from "react";
import NavButton from "./NavButton";
import "../Styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <NavButton text="HISTORY"
              link="/history"
      />
      <NavButton text="CURRENT"
              link="/"
      />
      <NavButton text="WEIGHT"
              link="/weight"
      />
    </div>
    
  )
}


export default Header;