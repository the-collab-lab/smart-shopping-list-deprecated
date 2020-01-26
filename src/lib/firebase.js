// NOTE: import only the Firebase modules that you need in your app... except
// for the second line, which makes both the linter and react-firebase happy
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initalize Firebase.
// These details will need to be replaced with the project specific env vars at the start of each new cohort.
var firebaseConfig = {
  apiKey: { TCL_X_API_KEY },
  authDomain: { TCL_X_AUTH_DOMAIN },
  databaseURL: { TCL_X_DATABASE_URL },
  projectId: { TCL_X_PROJECT_ID },
  storageBucket: { TCL_X_STORAGE_BUCKET },
  messagingSenderId: { TCL_X_SENDER_ID },
  appId: { TCL_X_APP_ID },
};

let fb = firebase.initializeApp(firebaseConfig);

export { fb };
