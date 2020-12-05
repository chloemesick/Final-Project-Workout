import { useState, useEffect } from "react";
import { WorkoutLog } from "../data/firebase";

function useAllWorkouts() {
  const [wokouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setWorkouts(docs);
    };

    const onError = (error) => {
      setIsLoading(false);
      setErrorMessage("There was a problem loading your workout log. Please try again.");
      console.error(error);
    };

    const unsubscribe = .orderBy("rating", "desc").onSnapshot(onNext, onError);

    return unsubscribe;
  }, []);

  return [movies, isLoading, errorMessage];
}

export default useAllWorkouts;