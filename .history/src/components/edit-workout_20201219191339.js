import React from "react";
import useWorkout from "../hooks/use-workout";
import useSaveWorkout from "../hooks/use-save-workout";
import "./edit-workout.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import WorkoutForm from "./workout-form";

function EditWorkout(props) {
  const workoutId = props.id;
  const userId = props.user.uid;

  const [workoutData, isLoading, errorMessage] = useWorkout(workoutId);
  const [saveWorkout, isSaving, formMessage] = useSaveWorkout();

  const onWorkoutSubmit = async (
    dateAdded,
    focus,
    moves,
    reps,
    timing,
    notes,
    dayOfWeek,
    rating
    
  ) => {
    saveWorkout({ dateAdded, focus, moves, notes, reps, timing, dayOfWeek, rating }, userId, workoutId);
  };

  return (
    <div className="edit-container">
      <h2>Edit Workout</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {workoutData && (
        <WorkoutForm
          initialState={workoutData}
          onSubmit={onWorkoutSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditWorkout;
