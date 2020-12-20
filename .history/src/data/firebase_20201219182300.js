import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9RTTWlfJVq4AEgIoMJusiSXPoKw0SLKo",
  authDomain: "codesprintb-final-project.firebaseapp.com",
  databaseURL: "https://codesprintb-final-project.firebaseio.com",
  projectId: "codesprintb-final-project",
  storageBucket: "codesprintb-final-project.appspot.com",
  messagingSenderId: "736170980742",
  appId: "1:736170980742:web:1589ecd32ee95495dfe807",
  measurementId: "G-3T2EFQ6LGX",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

const db = firebase.firestore();
const WorkoutLog = db.collection("Workout Log");
const usersCollection = db.collection("users");

export default db;
export { WorkoutLog, usersCollection, provider, auth, firebase };
