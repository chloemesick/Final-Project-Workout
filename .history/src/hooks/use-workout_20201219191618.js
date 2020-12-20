import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function useWorkout(userId, workoutId) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [workoutData, setWorkoutData] = useState(null);

  useEffect(() => {
    async function getWorkout() {
      setIsLoading(true);

      try {
        const workoutSnapshot = await usersCollection.doc(userId).get();

        if (!workoutSnapshot.exists) {
          throw new Error("No such workout exists!");
        }

        const data = workoutSnapshot.data();
        setWorkoutData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
        console.error(error);
      }

      setIsLoading(false);
    }

    getWorkout();
  }, [workoutId]);

  return [workoutData, isLoading, errorMessage];
}

export default useWorkout;