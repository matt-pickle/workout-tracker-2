import React, {useState, useEffect} from "react";
import "../Styles/InputBox.css";

function InputBox(props, ref) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  useEffect(() => {
    props.addToLift(props.name, input)
  }, [input])

  return (
    <div className="inputBox">
      <label htmlFor={props.name}>{props.name}</label>
      <div className="inputContainer" id={props.name + "Container"}>
        <input type="text"
               id={props.name}
               value={input}
               onChange={handleChange}
               ref={ref}
        />
      </div>
    </div>
  )
}

export default React.forwardRef(InputBox);