import React from "react";
import "../Styles/PastWorkout.scss";
import PastLift from "./PastLift";
import Button from "./Button";

function PastWorkout(props) {
  const pastLifts = props.workoutArr.map(lift => {    
    let repsArr = [];
    const numOfSets = Object.keys(lift).length - 2;
    let i;
    for (i = 1; i < numOfSets; i++) {
      repsArr.push(<span><span className="boldText">Set {i}:</span> {lift[`Set ${i}`]} reps&nbsp;&nbsp;&nbsp;</span>);
    }
    return (
      <PastLift lift={lift["Lift"]}
                weight={lift["Weight"]}
                reps={repsArr}
                key={lift["id"]}
      />
    )                     
  })
  
  return (
    <div className="pastWorkout">
      <p className="dateText">{props.date}</p>
      <div className="pastLiftsContainer">
        {pastLifts}
      </div>
      <Button text="REMOVE"
              onClick={() => props.removeWorkout(props.id)}
      />
    </div>
  )
}

export default PastWorkout;