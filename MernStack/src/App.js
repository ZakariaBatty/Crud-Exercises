import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar.component";
import ExercisesList from "./components/Exercises-List.component";
import EditExercise from "./components/Edit-Exercise.component";
import CreateExercisese from "./components/Create-Exercisese.component";
import CreateUser from "./components/Create-User.component";

function App() {
  return (

    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercisese} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>

  );
}


export default App;
