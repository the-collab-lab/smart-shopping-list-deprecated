// NOTE: import only the Firebase modules that you need in your app... except
// for the second line, which makes both the linter and react-firebase happy
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initalize Firebase.
// These details will need to be replaced with the project specific env vars at the start of each new cohort.
var firebaseConfig = {
  apiKey: "AIzaSyDZVtNP8l1z8u36In4tJZrOdIOn2aNCwGo",
  authDomain: "shopping-c16d8.firebaseapp.com",
  projectId: "shopping-c16d8",
  storageBucket: "shopping-c16d8.appspot.com",
  messagingSenderId: "979351683661",
  appId: "1:979351683661:web:ef378e0975539b981c1204",
  measurementId: "G-J69XJ99QHT"
};

let fb = firebase.initializeApp(firebaseConfig);

export { fb };
