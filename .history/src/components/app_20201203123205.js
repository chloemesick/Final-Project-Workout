import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddWorkoutPage from "../pages/ad"
import NotFoundPage from "../components/not-found-page";
import Nav from "./nav";
import EditWorkoutLog from "./edit-workout";
import WorkoutsPage from "./workouts-page";
import AddWorkoutPage from "../pages/add-workout-page";

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
