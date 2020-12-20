import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function useAllWorkouts(userId, filterDayOfWeek) {
  const [workouts, setWorkouts] = useState([]);
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

    const workoutref = usersCollection.doc(userId).collection("workout");
    let unsubscribe;

    if (filterDayOfWeek === "All") {
      unsubscribe = workoutref.orderBy("rating", "desc").onSnapshot(onNext, onError);
    } else if (filterDayOfWeek === "Sunday") {
      unsubscribe = workoutref.where("dayOfWeek", "==", "Sunday").onSnapshot(onNext, onError);
    } else if (filterDayOfWeek === "Monday") {
      unsubscribe = workoutref.where("dayOfWeek", "==", "Monday").onSnapshot(onNext, onError);
    } else if (filterDayOfWeek === "Tuesday") {
      unsubscribe = workoutref.where("dayOfWeek", "==", "Tuesday").onSnapshot(onNext, onError);
    } else if (filterDayOfWeek === "Wednesday") {
      unsubscribe = workoutref.where("dayOfWeek", "==", "Wednesday").onSnapshot(onNext, onError);
    } else if (filterDayOfWeek === "Thursday") {
      unsubscribe = workoutref.where("dayOfWeek", "==", "Thursday").onSnapshot(onNext, onError);
    } else if (filterDayOfWeek === "Friday") {
      unsubscribe = workoutref.where("dayOfWeek", "==", "Friday").onSnapshot(onNext, onError);
    } else if (filterDayOfWeek === "Saturday") {
      unsubscribe = workoutref.where("dayOfWeek", "==", "Saturday").onSnapshot(onNext, onError);
    }

    // const unsubscribe = usersCollection
    //   .doc(userId)
    //   .collection("workout")
    //   .orderBy(sortField, "desc")
    //   .onSnapshot(onNext, onError);

    return unsubscribe;
  }, [userId, sortField]);
  // const unsubscribe = WorkoutLog.orderBy("rating", "desc").onSnapshot(onNext, onError);

  return [workouts, isLoading, errorMessage];
}

export default useAllWorkouts;
