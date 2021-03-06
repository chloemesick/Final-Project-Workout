import { useState } from "react";
import { usersCollection } from "../data/firebase";

function useSaveWorkout() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (workoutData, userId, workoutId) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      if (workoutId === undefined) {
        await usersCollection.doc(userId).collection("workout").add(workoutData);
      } else {
        await usersCollection.doc(userId).collection("workout").doc(workoutId).set;
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