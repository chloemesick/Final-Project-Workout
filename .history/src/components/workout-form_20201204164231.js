import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./workout-form.css";

function WorkoutForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.dateAdded === undefined) initialState.dateAdded = "11/08/2020";
  if (initialState.focus === undefined) initialState.focus = "";
  if (initialState.moves === undefined) initialState.moves = "";
  if (initialState.reps === undefined) initialState.reps = "20";
  if (initialState.timing === undefined) initialState.timing = "30 seconds";
  if (initialState.notes === undefined) initialState.notes = "";
  if (initialState.rating === undefined) initialState.rating = 3;

  const [dateAdded, setDateAdded] = useState(initialState.dateAdded);
  const [focus, setFocus] = useState(initialState.focus);
  const [moves, setMoves] = useState(initialState.moves);
  const [reps, setReps] = useState(initialState.reps);
  const [timing, setTiming] = useState(initialState.timing);
  const [notes, setNotes] = useState(initialState.notes);
  const [rating, setRating] = useState(initialState.rating);
  const [errorMessage, setErrorMessage] = useState("");

  const onDateAddedChange = (event) => {
    setDateAdded(event.target.value);
  };
  const onFocusChange = (event) => {
    setFocus(event.target.value);
  };
  const onMovesChange = (event) => {
    setMoves(event.target.value);
  };
  const onRepsChange = (event) => {
    setReps(event.target.value);
  };
  const onTimingChange = (event) => {
    setTiming(event.target.value);
  };
  const onNotesChange = (event) => {
    setNotes(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onWorkoutSumbit = async (event) => {
    event.preventDefault();
    onSubmit(dateAdded, focus, moves, reps, timing, notes, rating);
  };

  return (
    <form className="workout-form" onSubmit={onWorkoutSumbit}>
      <h2 className="workout-form__dateAdded">Workout Details</h2>
      {message && <p className="workout-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="workout-form__controls" disabled={isSaving}>
        <label className="workout-form__label">Date Added:</label>
        <input
          className="workout-form__input"
          type="string"
          value={dateAdded}
          onChange={onDateAddedChange}
        />
        <label className="workout-form__label">Focus:</label>
        <input
          className="workout-form__input"
          type="string"
          value={focus}
          onChange={onFocusChange}
        />
        <label className="workout-form__label">Moves:</label>
        <input
          className="workout-form__input"
          type="string"
          value={moves}
          onChange={onMovesChange}
        />
        <label className="workout-form__label">Reps:</label>
        <input className="workout-form__input" type="string" value={reps} onChange={onRepsChange} />
        <label className="workout-form__label">Timing:</label>
        <input
          className="workout-form__input"
          type="string"
          value={timing}
          onChange={onTimingChange}
        />
        <label className="workout-form__label">Notes:</label>
        <input
          className="workout-form__input"
          type="string"
          value={notes}
          onChange={onNotesChange}
        />
        <label className="workout-form__label">Rating:</label>
        <input
          className="workout-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <input
          className="workout-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default WorkoutForm;
