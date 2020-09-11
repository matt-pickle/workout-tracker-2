const User = require("../models/User");

//Adds a workout to a user's workoutHistory
function addWorkout(req, res) {
  User.findOneAndUpdate({username: req.query.user}, //finds object by username
    {"$push": {workoutHistory: JSON.parse(req.query.workoutObj)}}, //pushes new workout to workoutHistory array
    {useFindAndModify: false}, //option to turn off deprecated function
    (err) => {
      if (err) {
        console.error(err);
        return res.send(500).send(err);
      };
      return res.sendStatus(200);
    }
  );
}

//Gets a user's workoutHistory
function getHistory(req, res) {
  User.findOne(
    {username: req.query.user},
    (err, userObj) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(userObj.workoutHistory);
    }
  )
}

//Removes a workout from user's workoutHistory
function updateHistory(req, res) {
  User.findOneAndUpdate({username: req.query.user}, //finds object by username
    {workoutHistory: JSON.parse(req.query.workoutHistory)}, //updates workoutHistory without removed workout
    {useFindAndModify: false}, //option to turn off deprecated function
    (err, obj) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      return res.sendStatus(200);
    }
  );
}

module.exports = {addWorkout, getHistory, updateHistory};