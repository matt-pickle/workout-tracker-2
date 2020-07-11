import React, {useState, useContext} from "react";
import "../Styles/styles.scss";
import {UserContext} from "./UserContext";
import Button from "./Button";

function WeightInput(props) {
  const [input, setInput] = useState("");
  const user = useContext(UserContext);

  function handleChange(event) {
    setInput(event.target.value);
  }

  //Saves current weight to database and state
  function addToHistory() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const year = today.getFullYear();
    const dateString = `${month}-${date}-${year}`;
    const weightObj = {[dateString]: input};

    fetch(`/weight/addWeight?user=${user}&weightObj=${JSON.stringify(weightObj)}`, {
      method: "POST"
    })
    .then(res => {
      if (!res.ok) {
        res.text().then(text => {
          console.error(text);
        });
      } else {
        res.text().then(text => {
          props.setWeightHistory(JSON.parse(text));
          setInput("");
        });
      }
    });
  }

  return (
    <div className="inputBox">
      <label htmlFor="weight">Current Weight</label>
      <div className="inputContainer" id="currentWeightContainer">
        <input type="text"
               id="weight"
               value={input}
               onChange={handleChange}
        />
      </div>
      <Button text="SAVE"
              onClick={addToHistory}
      />
    </div>
  )
}

export default WeightInput;