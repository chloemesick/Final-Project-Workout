import React from "react";
import { Helmet } from "react-helmet";
import MovieListing from "../components/movie-listing";

function workoutsPage() {
  return (
    <main>
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <MovieListing />
    </main>
  );
}

export default WorkoutssPage;