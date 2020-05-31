const express = require("express");
const {addWorkout, getHistory, updateHistory} = require("../controllers/workoutController");

const router = express.Router();

//Adds a workout to a user's workoutHistory
router.post("/addWorkout", addWorkout);

//Gets a user's workoutHistory
router.get("/getHistory", getHistory);

//Removes a workout from user's workoutHistory
router.put("/updateHistory", updateHistory);

module.exports = router;