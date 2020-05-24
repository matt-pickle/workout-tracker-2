const express = require("express");
const {registerUser, login} = require("../controllers/userController");

const router = express.Router();

//Registers new user
router.post("/register", registerUser);

//Login
router.post("/login", login);

module.exports = router;