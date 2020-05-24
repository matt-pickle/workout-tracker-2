const express = require("express");
const {registerUser, login, getUser} = require("../controllers/userController");
const cookieParser = require("cookie-parser");

const router = express.Router();

router.use(cookieParser());

//Registers new user
router.post("/register", registerUser);

//Login
router.post("/login", login);

//Verifies login and gets current username
router.get("/getUser", getUser);

module.exports = router;