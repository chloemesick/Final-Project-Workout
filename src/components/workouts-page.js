import React from "react";
import { Helmet } from "react-helmet";
import WorkoutListing from "./workout-listing";

function WorkoutsPage() {
  return (
    <main>
      <Helmet>
        <title>Workouts</title>
      </Helmet>
      <WorkoutListing />
    </main>
  );
}

export default WorkoutsPage;
