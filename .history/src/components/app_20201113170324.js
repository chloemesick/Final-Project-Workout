import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { WorkoutLog } from "../data/firebase";
import AddWorkoutPage from "../add-workout";
import MovesPage from "../components/moves";
import NotFoundPage from "../components/not-found-page";
import Nav from "./nav";
import EditWorkoutLog from "../edit-workout";
import WorkoutForm from "./workout-form";


function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
        <WorkoutsPage />
        </Route>

        <Route path="/add">
          <AddWorkoutPage />
        </Route>

        <Route path="/edit/:id">
          <EditWorkoutLog />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
