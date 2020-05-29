const express = require("express");
const {addWorkout} = require("../controllers/workoutController");

const router = express.Router();

//Adds a workout to a user's workoutHistory
router.post("/addWorkout", addWorkout);

module.exports = router;