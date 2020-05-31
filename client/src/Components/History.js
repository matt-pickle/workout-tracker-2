import React, {useState, useEffect, useContext} from "react";
import "../Styles/History.scss";
import {UserContext} from "./UserContext";
import PastWorkout from "./PastWorkout";
import LogoutButton from "./LogoutButton";

function History(props) {
  const user = useContext(UserContext);
  const [workoutHistory, setWorkoutHistory] = useState();

  //Gets workout history from database
  useEffect(() => {
    fetch(`/workout/getHistory?user=${user}`)
    .then(res => {
      if (!res.ok) {
        res.text().then(text => {
          console.error(text);
        });
      } else {
        res.text().then(text => {
          setWorkoutHistory(JSON.parse(text));
        });
      }
    });
  }, []);

  //Removes PastWorkout when "Remove" button is clicked
  function removeWorkout(id) {
    let workoutHistoryCopy = workoutHistory;
    const newWorkoutHistory = workoutHistoryCopy.filter(workout => {
      return (workoutHistoryCopy.indexOf(workout) + 1) !== id
    })
    setWorkoutHistory(newWorkoutHistory)
    fetch(`/workout/updateHistory?user=${user}&workoutHistory=${JSON.stringify(newWorkoutHistory)}`, {
      method: "PUT"
    })
    .then(res => {
      if (!res.ok) {
        res.text().then(text => {
          console.error(text);
        });
      }
    });
  }

  const pastWorkouts = workoutHistory ? 
    workoutHistory.map(workout => {
      const workoutObj = workout;
      const workoutDate = Object.keys(workoutObj)
      return (
        <PastWorkout date={workoutDate}
                     workoutArr={workoutObj[workoutDate]}
                     removeWorkout={removeWorkout}
                     id={workoutHistory.indexOf(workout) + 1}
                     key={workoutHistory.indexOf(workout) + 1}
        />
      )
    })
  : <h2>No workout history yet!</h2>;

  return (
    <div className="history">
      {pastWorkouts}
      <LogoutButton />
    </div>
  )
}

export default History;