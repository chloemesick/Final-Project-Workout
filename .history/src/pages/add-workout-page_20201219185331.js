import React from "react";
import { Helmet } from "react-helmet";
import AddWorkout from "../components/add-workout";

function AddWorkoutPage(props) {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddWorkout{} />
    </main>
  );
}

export default AddWorkoutPage;


