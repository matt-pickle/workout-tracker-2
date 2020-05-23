import React, {useState} from "react";
import Button from "./Button";
import "../Styles/Register.scss";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleClick() {
    console.log("Clicked!");
  }

  return (
    <div className="register">
      <div className="inputBox">
        <label htmlFor="regUsernameContainer">Username</label>
        <div className="inputContainer" id="regUsernameContainer">
          <input type="text"
                  id="regUsername"
                  value={username}
                  onChange={handleNameChange}
          />
        </div>
      </div>
      <div className="inputBox">
      <label htmlFor="regPasswordContainer">Password</label>
        <div className="inputContainer" id="regPasswordContainer">
          <input type="text"
                  id="regPassword"
                  value={password}
                  onChange={handlePasswordChange}
          />
        </div>
    </div>
    <Button text="REGISTER"
              onClick={handleClick}
      />
  </div>
  )
}

export default Register;