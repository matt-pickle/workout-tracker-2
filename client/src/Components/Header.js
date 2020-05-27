import React from "react";
import NavButton from "./NavButton";
import "../Styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <NavButton text="HISTORY"
              link="/user/history"
      />
      <NavButton text="CURRENT"
              link="/user/current"
      />
      <NavButton text="WEIGHT"
              link="/user/weight"
      />
    </div>
    
  )
}


export default Header;