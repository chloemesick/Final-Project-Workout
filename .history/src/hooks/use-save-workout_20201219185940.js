import { useState } from "react";
import { usersCollection } from "../data/firebase";

function useSaveWorkout() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (workoutData, userId, workoutId) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      if (id === undefined) {
        await WorkoutLog.add(workoutData);
      } else {
        await WorkoutLog.doc(workoutId).set(workoutData);
      }
      setFormMessage("Saved successfully!");
    } catch (error) {
      setFormMessage("Something went wrong editing this workout. Please try again.");
      console.error(error);
    }

    setIsSaving(false);
  };

  return [save, isSaving, formMessage];
}

export default useSaveWorkout;