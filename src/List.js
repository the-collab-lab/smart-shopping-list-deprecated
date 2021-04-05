import React, { useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db, writeToFirestore } from './lib/firebase'

const List = () => {
    const list = 'shopping-list'
    const [name, setName] = useState('')
    const [results, loading, error] = useCollection(db.collection(list))

    const handleSubmit = e => {
        e.preventDefault()
        writeToFirestore(list, { name })
        setName('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" id="name" type="text" onChange={e => setName(e.target.value)} value={name} />
                <button type="submit">Add item</button>
            </form>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection: Loading...</span>}
            <ul>
                {results && results.docs.map(item => (
                <li key={item.data().name}>{item.data().name}</li>
                ))}
            </ul>
        </div>
    )
}

export default List
