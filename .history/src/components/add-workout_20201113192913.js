import { WorkoutLog, firebase } from "../data/firebase";
import React, { useState } from "react";
import "./add-workout.css";
import WorkoutForm from "./workout-form";

function AddWorkout() {
    
      const [isSaving, setIsSaving] = useState(false);
      const [formMessage, setFormMessage] = useState("");
    
      const onWorkoutSumbit = async (focus, moves, reps, timing, notes) => {
        //alert(`You want to add: ${title}, ${rating}, ${releaseYear}.`);
    
        setIsSaving(true);
        setFormMessage("");
    
        try {
          await WorkoutLog.add({
            
            focus,
            moves,
            reps,
            timing,
            notes
          });
          setFormMessage("Saved Successfully!");
          console.log("Saved");
        } catch (error) {
          setFormMessage("Something went wrong. Please try again!");
          console.error(error);
        }
    
        setIsSaving(false);
      };
    
      return (
        <div className="add-container">
          <h1>Add Workout</h1>
          <WorkoutForm onSubmit={onWorkoutSumbit} isSaving={isSaving} message={formMessage} />
        </div>
      );
    }

export default AddWorkout;