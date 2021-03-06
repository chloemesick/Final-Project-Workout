// import React from "react";
// import { Helmet } from "react-helmet";
// import { useParams } from "react-router-dom";
// import EditWorkout from "./edit-workout-log"


// function EditWorkoutLog() {
//   const { id } = useParams();

//   return (
//     <main>
//       <Helmet>
//         <title>Edit</title>
//       </Helmet>
//       <EditWorkout id={id} />
     
//     </main>
//   );
// }

// export default EditWorkoutLog;

import React from "react";
import useWorkout from "../hooks/use-workout";
import useSaveMovie from "../hooks/use-save-movie";
import "./edit-movie.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import MovieForm from "./movie-form";

function EditMovie(props) {
  const { id } = props;

  const [movieData, isLoading, errorMessage] = useMovie(id);
  const [saveMovie, isSaving, formMessage] = useSaveMovie();

  const onMovieSubmit = async (title, rating, releaseYear) => {
    saveMovie({ title, rating, releaseYear }, id);
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

export default EditMovie;
