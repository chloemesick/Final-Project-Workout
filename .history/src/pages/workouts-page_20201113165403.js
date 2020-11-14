import React from "react";
import { Helmet } from "react-helmet";
import MovieListing from "../components/movie-listing";

function WorkoutsPage() {
  return (
    <main>
      <Helmet>
        <title>Workouts</title>
      </Helmet>
      <MovieListing />
    </main>
  );
}

export default WorkoutsPage;