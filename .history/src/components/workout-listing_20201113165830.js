import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { WorkoutLog } from "../data/firebase";
import Workout from "./;
import "./movie-listing.css";

function WorkoutListing() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setIsLoading(true);
        const onNext = (snapshot) => {
         setIsLoading(false);
         const docs = snapshot.docs;
         setMovies(docs);
        };
        const onError = (error) => {
          setErrorMessage("There was a porblem loading your movie ratings. Please try again!");
          console.error(error);
        };
    
       const unsubscribe = moviesCollection.orderBy("rating", "desc").onSnapshot(onNext, onError);
       return unsubscribe;
     }, []);
     
    
      return (
        <div className="movies-container">
          <h1>Movies</h1>
          {isLoading && (
            <LoadingSpinner
              size="50px"
              spinnerColor="white"
              backgroundColor="rgb(255, 255, 255, 0.2)"
            />
          )}
          {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
          <ul className="movie-list">
            {movies.map((movieDoc) => {
              const movieId = movieDoc.id;
              const movieData = movieDoc.data();
              return (
                <li key={movieId}>
                  <Movie id={movieId} data={movieData} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    
    export default MovieListing;
    