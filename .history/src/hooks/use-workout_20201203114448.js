import { useState, useEffect } from "react";
import { WorkoutLog } from "../data/firebase";

function useWorkout(id) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [workoutData, setWorkoutData] = useState(null);

  useEffect(() => {
    async function getWorkout() {
      setIsLoading(true);

      try {
        const movieSnapshot = await moviesCollection.doc(id).get();

        if (!movieSnapshot.exists) {
          throw new Error("No such movie exists!");
        }

        const data = movieSnapshot.data();
        setMovieData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
        console.error(error);
      }

      setIsLoading(false);
    }

    getMovie();
  }, [id]);

  return [movieData, isLoading, errorMessage];
}

export default useMovie;