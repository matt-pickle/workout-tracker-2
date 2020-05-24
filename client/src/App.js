import React from 'react';
import './Styles/App.scss';
import {Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import History from "./Components/History";
import Weight from "./Components/Weight";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/history" component={History}/>
        <ProtectedRoute path="/weight" component={Weight}/>
      </Switch>
    </div>
    
  )
}

export default App;