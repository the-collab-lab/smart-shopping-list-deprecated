import React from 'react';
import firebase from './lib/firebase';
import '@firebase/firestore';
import { FirestoreProvider } from 'react-firestore';
import './App.css';
import Users from './Users';

function App() {
  return (
    <FirestoreProvider firebase={firebase}>
      <div className="App">
        <Users />
      </div>
    </FirestoreProvider>
  );
}

export default App;
