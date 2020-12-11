import React from "react";
import useWorkout from "../hooks/use-workout";
import useSaveWorkout from "../hooks/use-save-workout";
import "./edit-workout.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import WorkoutForm from "./workout-form";

function EditWorkout(props) {
  const { id } = props;

  const [workoutData, isLoading, errorMessage] = useWorkout(id);
  const [saveWorkout, isSaving, formMessage] = useSaveWorkout();

  const onWorkoutSubmit = async (
    dateAdded,
    focus,
    moves,
    notes,
    reps,
    timing,
    dayOfWeek,
    rating,
    
  ) => {
    saveWorkout({ dateAdded, focus, moves, notes, reps, timing, rating, dayOfWeek }, id);
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
