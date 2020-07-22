import React, {useState, useEffect, useContext} from "react";
import WeightInput from "./WeightInput";
import WeightChart from "./WeightChart";
import LogoutButton from "./LogoutButton";
import {UserContext} from "./UserContext";
import "../Styles/styles.scss";

function Weight() {
  const [weightHistory, setWeightHistory] = useState([]);

  const user = useContext(UserContext);

  //Gets weightHistory from database
  useEffect(() => {
    fetch(`/weight/getHistory?user=${user}`)
    .then(res => {
      if (!res.ok) {
        res.text().then(text => {
          console.error(text);
        });
      } else {
        res.text().then(text => {
          setWeightHistory(JSON.parse(text));
        });
      }
    });
  }, []);

  return (
    <div className="weight-container">
      <WeightInput setWeightHistory={setWeightHistory} />
      <WeightChart weightHistory={weightHistory} />
      <LogoutButton />
    </div>
  )
}

export default Weight;