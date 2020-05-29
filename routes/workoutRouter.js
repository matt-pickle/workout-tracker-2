const express = require("express");
const {addWorkout, getHistory} = require("../controllers/workoutController");

const router = express.Router();

//Adds a workout to a user's workoutHistory
router.post("/addWorkout", addWorkout);

//Gets a user's workoutHistory
router.get("/getHistory", getHistory);

module.exports = router;