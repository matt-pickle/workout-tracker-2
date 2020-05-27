import React from 'react';
import './Styles/App.scss';
import {Switch, Route, Redirect} from "react-router-dom";
import {UserContextProvider} from "./Components/UserContext";
import User from "./Components/User";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/user" />
        </Route>
        <ProtectedRoute path="/user">
          <UserContextProvider>
            <User />
          </UserContextProvider>
        </ProtectedRoute>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
    
  )
}

export default App;