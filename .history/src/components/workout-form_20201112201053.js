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

  const [dateAdded, setDateAdded] = useState(initialState.dateAdded);
  const [focus, setFocus] = useState(initialState.focus);
  const [moves, setMoves] = useState(initialState.moves);
  const [reps, setReps] = useState(initialState.reps);
  const [timing, setTiming] = useState(initialState.timing);
  const [notes, setNotes] = useState(initialState.notes);
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
  const onWorkoutSumbit = async (event) => {
    event.preventDefault();
    onSubmit(dateAdded, focus, moves, reps, timing, notes);
  };

  return (
    <form className="workout-form" onSubmit={onWorkoutSumbit}>
      <h2 className="workout-form__dateAdded">Date Added</h2>
      {message && <p className="workout-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="workout-form__controls" disabled={isSaving}>
        <label className="workout-form__label">Workout Details</label>
        <input className="workout-form__input" type="text" value={dateAdded} onChange={onDateAddedChange} />
        <label className="workout-form__label">Date Added:</label>
        <input
          className="workout-form__input"
          type="number"
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
