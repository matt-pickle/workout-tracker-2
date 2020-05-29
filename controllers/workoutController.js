const User = require("../models/User");

//Adds a workout to a user's workoutHistory
function addWorkout(req, res) {
  User.findOneAndUpdate({username: req.query.user}, //finds object by username
    {$push: {workoutHistory: req.query.workoutObj}}, //pushes new workout to workoutHistory array
    {useFindAndModify: false}, //option to turn off deprecated function
    (err) => {
      if (err) {
        console.error(err);
        return res.send(500).send(err);
      };
      return res.sendStatus(200);
    });
}

module.exports = {addWorkout};