const express = require("express");
const registerUser = require("../controllers/userController");

const router = express.Router();

//Registers new user
router.post("/register", registerUser);

module.exports = router;