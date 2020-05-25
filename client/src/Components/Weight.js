import React, {useState} from "react";
import WeightInput from "./WeightInput";
import WeightChart from "./WeightChart";
import LogoutButton from "./LogoutButton";
import "../Styles/Weight.scss";

function Weight() {
  const [weightHistory, setWeightHistory] = useState(
    JSON.parse(localStorage.getItem("weightHistory")) || {}
  );

  return (
    <div className="weightContainer">
      <WeightInput setWeightHistory={setWeightHistory} />
      <WeightChart weightHistory={weightHistory}      />
      <LogoutButton />
    </div>
  )
}

export default Weight;