import React from "react";
import { Helmet } from "react-helmet";
import AddWorkout from "../components/add-workout";

function AddWorkoutPage() {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddMovie />
    </main>
  );
}

export default AddWorkoutPage;


//CRUD component