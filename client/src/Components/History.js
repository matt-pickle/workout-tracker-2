import React, {useState} from "react";
import "../Styles/History.css";
import PastWorkout from "./PastWorkout";

function History() {
  const [workoutHistory, setWorkoutHistory] = useState(JSON.parse(localStorage.getItem("workoutHistory")));

  //Removes PastWorkout when "Remove" button is clicked
  function removeWorkout(id) {
    let workoutHistoryCopy = workoutHistory;
    const newWorkoutHistory = workoutHistoryCopy.filter(workout => {
      return (workoutHistoryCopy.indexOf(workout) + 1) !== id
    })
    setWorkoutHistory(newWorkoutHistory)
    localStorage.setItem("workoutHistory", JSON.stringify(newWorkoutHistory));
  }

  const pastWorkouts = workoutHistory ? 
    workoutHistory.map(workout => {
      const workoutDate = Object.keys(workout)
      return (
        <PastWorkout date={workoutDate}
                     workoutArr={workout[workoutDate]}
                     removeWorkout={removeWorkout}
                     id={workoutHistory.indexOf(workout) + 1}
                     key={workoutHistory.indexOf(workout) + 1}
        />
      )
    })
  : <h1>No workout history yet!</h1>;
  
  return (
    <div className="history">
      {pastWorkouts}
    </div>
  )
}


export default History;