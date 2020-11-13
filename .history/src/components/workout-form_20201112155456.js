import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./movie-form.css";

function WorkoutForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

if (initialState.dateAdded === undefined) initialState.dateAdded = 11-08-2020;
if (initialState.focus === undefined) initialState.focus = "arms, legs, core, other";
if (initialState.moves === undefined) initialState.moves = 5;
if (initialState.reps === undefined) initialState.reps = 20;
if (initialState.timing === undefined) initialState.timing = 2020;
if (initialState.notes === undefined) initialState.notes = 2020;

  const [title, setTitle] = useState(initialState.title);
  const [rating, setRating] = useState(initialState.rating);
  const [releaseYear, setReleaseYear] = useState(initialState.releaseYear);
  const [errorMessage, setErrorMessage] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onYearReleasedChange = (event) => {
    setReleaseYear(event.target.value);
  };

  const onMovieSumbit = async (event) => {
    event.preventDefault();
    onSubmit(title, rating, releaseYear);
  };

  return (
    <form className="movie-form" onSubmit={onMovieSumbit}>
      <h2 className="movie-form__title">Movie Details</h2>
      {message && <p className="movie-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="movie-form__controls" disabled={isSaving}>
        <label className="movie-form__label">Movie Title:</label>
        <input className="movie-form__input" type="text" value={title} onChange={onTitleChange} />
        <label className="movie-form__label">Rating:</label>
        <input
          className="movie-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <label className="movie-form__label">Year Released:</label>
        <input
          className="movie-form__input"
          type="number"
          value={releaseYear}
          onChange={onYearReleasedChange}
        />
        <input
          className="movie-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default MovieForm;
