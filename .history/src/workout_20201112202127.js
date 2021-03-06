import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import "./workout.css";
import { workoutLog } from "../data/firebase";

function Workout(props) {
  const { id, data } = props;
  const { title, releaseYear, rating, genre, awards } = data;

  const ratingString = "💚".repeat(rating) + "🤍".repeat(5 - rating);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteMovie = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = moviesCollection.doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="movie">
      <div className="movie__contents">
        <div className="movie__title">{title}</div>
        <div className="movie__rating">{ratingString}</div>
        <div className="movie__year">{releaseYear}</div>
        <div className="genre">{genre}</div>
        <div className="awards">{awards}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="movie__button" disabled={isDeleting} onClick={deleteMovie}>
          <Delete />
        </button>
        <button className="movie__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Workout;
