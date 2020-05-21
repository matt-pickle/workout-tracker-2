import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../Styles/NavButton.scss";

function NavButton(props) {
  const [hoverClass, setHoverClass] = useState("");

  //Applies hover effect class if not using a touch screen
  function hover() {
    if ("ontouchstart" in window
      || navigator.maxTouchPoints > 0
      || navigator.msMaxTouchPoints > 0) {
        setHoverClass("")
    } else {
      setHoverClass("hovered");
    }
  }

  function unHover() {
    setHoverClass("");
  }

  return (
    <Link to={props.link}>
      <button className={`navButton ${hoverClass}`}
              onMouseEnter={hover}
              onMouseLeave={unHover}
              onTouchStart={hover}
              onTouchEnd={unHover}
      >
        {props.text}
      </button>
    </Link>
  )
}


export default NavButton;