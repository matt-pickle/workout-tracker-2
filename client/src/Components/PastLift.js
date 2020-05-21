import React from "react";
import "../Styles/PastLift.scss";

function PastLift(props) {
  return (
    <div className="pastLift">
      <span><span className="boldText">Lift:</span> {props.lift}
        <span className="boldText">&nbsp;&nbsp;&nbsp;Weight:</span> {props.weight}lbs</span>
      <div className="pastReps">
        {props.reps}
      </div>
    </div>
  )
}

export default PastLift;