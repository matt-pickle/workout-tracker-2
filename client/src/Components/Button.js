import React, {useState} from "react";
import "../Styles/Button.scss";

function Button(props) {
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
    <button className={`button ${hoverClass}`}
            id={props.id}
            onMouseEnter={hover}
            onMouseLeave={unHover}
            onTouchStart={hover}
            onTouchEnd={unHover}
            onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default Button