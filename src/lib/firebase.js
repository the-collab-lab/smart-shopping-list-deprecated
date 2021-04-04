// NOTE: import only the Firebase modules that you need in your app... except
// for the second line, which makes both the linter and react-firebase happy
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initalize Firebase.
// These details will need to be replaced with the project specific env vars at the start of each new cohort.
var firebaseConfig = {
  apiKey: "AIzaSyAyo4_edWgd_ytXNkwowxxb8oVqsWN4YJA",
  authDomain: "blog-88fa0.firebaseapp.com",
  databaseURL: "https://blog-88fa0.firebaseio.com",
  projectId: "blog-88fa0",
  storageBucket: "blog-88fa0.appspot.com",
  messagingSenderId: "118449606222",
  appId: "1:118449606222:web:5de10609ce43c168763d1f"
};

let fb = firebase.initializeApp(firebaseConfig);

export { fb };
