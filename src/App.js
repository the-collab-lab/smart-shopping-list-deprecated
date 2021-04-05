import React, { useEffect, useState } from 'react';
import { db, writeToFirestore } from './lib/firebase'
import logo from './logo.svg';
import './App.css';

function App() {
  const list = 'shopping-list'
  const [results, setResults] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    db.collection(list).onSnapshot((querySnapshot) => {
      let queryResults = []
      querySnapshot.forEach((doc) => {
        const { name } = doc.data()
        queryResults.push({ name })
      })
      setResults(queryResults)
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    writeToFirestore(list, { name })
    setName('')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" id="name" type="text" onChange={e => setName(e.target.value)} value={name} />
        <button type="submit">Add item</button>
      </form>
      <ul>
        {results && results.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
