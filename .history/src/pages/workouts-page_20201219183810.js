import React from "react";
import { Helmet } from "react-helmet";
import WorkoutListing from "../components/workout-listing";

function WorkoutsPage(props) {
  return (
    <main>
      <Helmet>
        <title>Workouts</title>
      </Helmet>
      <WorkoutListing user={} />
    </main>
  );
}

export default WorkoutsPage;
