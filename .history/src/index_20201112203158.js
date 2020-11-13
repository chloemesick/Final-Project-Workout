import React from "react";
import ReactDOM from "react-dom";
import db from "./data/firebase";
import App from "./components/app";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

async function getAllWorkoutLog() {
  try {
    const snapshot = await db.collection("WorkoutLog").get();
    const docs = snapshot.docs;
    for (const doc of docs) {
      console.log(doc.id);
      console.log(doc.data());
    }
  } catch (error) {
    console.log(error);
  }
}
getAllWorkoutLog();
