import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import { usersCollection } from "./data/firebase";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

async function getAllUsers() {
  try {
    const snapshot = await usersCollection
    .doc("TPIsVFYazoaOfngPt8w7o2oFZmD2")
    .collection("Workout Log")
    .get();
    snapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
    });
  } catch (error) {
    console.error(error);
  }
}
getUsers();
// async function getWorkoutLog() {
//   try {
//     const snapshot = await db.collection("Workout Log").get();
//     const docs = snapshot.docs;
//     for (const doc of docs) {
//       console.log(doc.id);
//       console.log(doc.data());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// getWorkoutLog();
