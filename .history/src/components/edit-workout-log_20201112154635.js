import React from "react";import React, { useState, useEffect } from "react";
import { WorkoutLog } from "../data/firebase";
import "./edit-movie.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import MovieForm from "./movie-form";

function EditWorkout(props) {
  const { id } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("saved");

  useEffect(() => {
    async function getWorkout() {
      setIsLoading(true);
      try {
        const workoutSnapshot = await WorkoutLog.doc(id).get();

        if (!workoutSnapshot.exists) {
          throw new Error("No such workout exists!");
        }

        const data = workoutSnapshot.data();
        setWorkoutData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
        console.error(error);
      }
      setIsLoading(false);
    }
    getWorkout();
  }, [id]);

  const onWorkoutSubmit = async (dateAdded, focus, moves, reps, timing, notes) => {

    setIsSaving(true);
    setFormMessage("");
    try {
      await WorkoutLog.doc(id).set({
        dateAdded,
        focus,
        moves,
        reps,
        
      });
      setFormMessage("Saved successfully!");
    } catch (error) {
      setFormMessage("Something went wrong editing this movie. Please try again.");
      console.error(error);
    }
    setIsSaving(false);
  };

  return (
    <div className="edit-container">
      <h2>Edit Movie</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {movieData && (
        <MovieForm
          initialState={movieData}
          onSubmit={onMovieSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditWorkout;