import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./workout-form.css";

function WorkoutForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.dateAdded === undefined) initialState.dateAdded = "December 20th, 2020";
  if (initialState.focus === undefined) initialState.focus = "";
  if (initialState.moves === undefined) initialState.moves = "";
  if (initialState.reps === undefined) initialState.reps = "20";
  if (initialState.timing === undefined) initialState.timing = "30 seconds";
  if (initialState.notes === undefined) initialState.notes = "";
  if (initialState.dayOfWeek === undefined) initialState.dayOfWeek = "Sunday";
  if (initialState.rating === undefined) initialState.rating = 3;

  const [dateAdded, setDateAdded] = useState(initialState.dateAdded);
  const [focus, setFocus] = useState(initialState.focus);
  const [moves, setMoves] = useState(initialState.moves);
  const [reps, setReps] = useState(initialState.reps);
  const [timing, setTiming] = useState(initialState.timing);
  const [notes, setNotes] = useState(initialState.notes);
  const [dayOfWeek, setDayOfWeek] = useState(initialState.dayOfWeek);
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
  const onDayOfWeekChange = (event) => {
    setDayOfWeek(event.target.value);
  };

  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onWorkoutSumbit = async (event) => {
    event.preventDefault();

    console.log(`The dateAdded is ${dateAdded} and its type is ${typeof dateAdded}.`);
    console.log(`The focus is ${focus} and its type is ${typeof focus}.`);
    console.log(`The moves is ${moves} and its type is ${typeof moves}.`);
    console.log(`The reps is ${reps} and its type is ${typeof reps}.`);
    console.log(`The timing is ${timing} and its type is ${typeof timing}.`);
    console.log(`The notes is ${notes} and its type is ${typeof notes}.`);
    console.log(`The rating is ${rating} and its type is ${typeof rating}.`);
    console.log(`The dayOfWeek is ${dayOfWeek} and its type is ${typeof dayOfWeek}.`);

    // Todo
    //Validation
    //Type converstion

    if (dateAdded === "") {
      setErrorMessage("Please enter the date!");
      return;
    }
    if (focus === "") {
      setErrorMessage("Please enter a focus!");
      return;
    }

    if (moves === "") {
      setErrorMessage("Please enter moves!");
      return;
    }

    if (reps === "") {
      setErrorMessage("Please enter a rep count!");
      return;
    }

    if (timing === "") {
      setErrorMessage("Please enter the timing!");
      return;
    }

    if (rating === "") {
      setErrorMessage("Please enter a rating!");
      return;
    }

    if (dayofWeek === "") {
      setErrorMessage("Please enter a Day of the Week!");
      return;
    }
    console.log("Successfully saved workout!");
    //setErrorMessage("Error! Error!");
    // onSubmit(dateAdded, focus, moves, reps, timing, notes, dayOfWeek, rating);
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
        <label className="workout-form__label">Day of the Week:</label>
        <select value={dayOfWeek} onChange={onDayOfWeekChange}>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
        <label className="workout-form__label">Focus:</label>
        <input
          className="workout-form__input"
          type="string"
          value={focus}
          onChange={onFocusChange}
        />
        <label className="workout-form__label">Moves:</label>
        <textarea className="workout-form__input" value={moves} onChange={onMovesChange} />

        <label className="workout-form__label">Reps:</label>
        <input className="workout-form__input" value={reps} onChange={onRepsChange} />

        <label className="workout-form__label">Timing:</label>
        <input className="workout-form__input" value={timing} onChange={onTimingChange} />
        <label className="workout-form__label"> Intensity Rating:</label>
        <input
          min="1"
          max="5"
          className="workout-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <label className="workout-form__label">Notes:</label>
        <textarea className="workout-form__input" value={notes} onChange={onNotesChange} />

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
