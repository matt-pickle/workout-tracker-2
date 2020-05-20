import React, {useState} from "react";
import WeightInput from "./WeightInput";
import WeightChart from "./WeightChart";
import "../Styles/Weight.css";

function Weight() {
  const [weightHistory, setWeightHistory] = useState(
    JSON.parse(localStorage.getItem("weightHistory")) || {}
  );

  return (
    <div className="weightContainer">
      <WeightInput setWeightHistory={setWeightHistory} />
      <WeightChart weightHistory={weightHistory}      />
    </div>
  )
}

export default Weight;