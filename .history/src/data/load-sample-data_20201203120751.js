import db from "./firebase";
import sampleData from "./sample-data.json";

async function loadSampleData() {
  sampleData.map(addWorkout);
}

async function addWorkout({ dateAdded, focus, moves, notes, reps, timing}) {
  try {
    const data = { dateAdded, focus, moves, notes, reps, timing, rating };

    // Look up a workout matching the workout and dateAdded.
    const snapshot = await db
      .collection("workouts")
      .where("focus", "==", focus)
      .where("dateAdded", "==", dateAdded)
      .get();

    // Create a doc reference that points to where this workout is located in the DB - either a new
    // doc if it is not there, or the existing doc.
    let docRef;
    if (snapshot.empty) {
      docRef = db.collection("Workout Log").doc();
    } else {
      docRef = snapshot.docs[0].ref;
    }

    // Update the doc with the given data.
    await docRef.set(data);
  } catch (error) {
    console.log(error);
  }
}

export default loadSampleData;