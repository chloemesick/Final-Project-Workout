import { WorkoutLog, firebase } from "../data/firebase";
import React, { useState } from "react";
import "./add-workout.css";
import WorkoutForm from "./workout-form";

function AddWorkout(props) {
  const { user } = props;
  const [saveWorkout, isSaving, formMessage] = useSaveWorkout();

  const onWorkoutSumbit = async (dateAdded, focus, moves, reps, timing, notes, rating) => {
    saveMovie({ title, rating, releaseYear });
  };

// function AddWorkout() {
//   const [isSaving, setIsSaving] = useState(false);
//   const [formMessage, setFormMessage] = useState("");

//   const onWorkoutSumbit = async (dateAdded, focus, moves, reps, timing, notes) => {
    
//     setIsSaving(true);
//     setFormMessage("");

  //   try {
  //     await WorkoutLog.add({
  //       dateAdded,
  //       focus,
  //       moves,
  //       reps,
  //       timing,
  //       notes,
  //       // dateAdded: firebase.firestore.Timestamp.now(),
  //     });
  //     setFormMessage("Saved Successfully!");
  //     console.log("Saved");
  //   } catch (error) {
  //     setFormMessage("Something went wrong. Please try again!");
  //     console.error(error);
  //   }

  //   setIsSaving(false);
  // };

  return (
    <div className="add-container">
      <h1>Add Workout</h1>
      <WorkoutForm onSubmit={onWorkoutSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddWorkout;
