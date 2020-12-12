import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import { WorkoutLog } from "../data/firebase";
import "./workout.css";

function Workout(props) {
  const { id, data } = props;
  const { dateAdded, focus, moves, notes, reps, timing, rating } = data;

  const ratingString = "💧".repeat(rating) + "".repeat(5 - rating);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteWorkout = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = WorkoutLog.doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };
  // const date = dateAdded.toDate();
  // const dateString = date.toLocaleDate

  return (
    <div className="workout">
      <div className="workout__contents">
        <div className="workout__dateAdded">{dateAdded}</div>
        <div className="workout__focus">{focus}</div>
        <div className="workout__moves">{moves}</div>
        <div className="workout__reps">{reps}</div>
        <div className="workout__timing">{timing}</div>
        <div className="workout__notes">{notes}</div>
        <div className="workout__rating">{ratingString}</div>
        <div className="workout__dayOfWeek">{dayOfWeek}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="workout__button" disabled={isDeleting} onClick={deleteWorkout}>
          <Delete />
        </button>
        <button className="workout__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Workout;
