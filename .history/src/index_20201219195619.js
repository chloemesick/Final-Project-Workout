import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// async function getUsersWorkout() {
//   try {
//     const snapshot = await usersCollection
//       .doc("TPIsVFYazoaOfngPt8w7o2oFZmD2")
//       .collection("workout")
//       .get();
//     snapshot.forEach((doc) => {
//       console.log(doc.id);
//       console.log(doc.data());
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
// getUsersWorkout();
