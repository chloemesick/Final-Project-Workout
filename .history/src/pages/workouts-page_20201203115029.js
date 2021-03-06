import React from "react";
import { Helmet } from "react-helmet";
import WorkoutListing from "../components/movie-listing";

function WorloutsPage() {
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