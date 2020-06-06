const express = require("express");
const {getHistory, addWeight} = require("../controllers/weightController");

const router = express.Router();

//Gets a user's weightHistory
router.get("/getHistory", getHistory);

//Adds current weight to a user's weightHistory
router.post("/addWeight", addWeight);

module.exports = router;