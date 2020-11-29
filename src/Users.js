import React, { Fragment, useState } from 'react';
import { object } from 'prop-types';
import { FirestoreCollection, withFirestore } from 'react-firestore';

const Users = (props) => {
  const [username, setUsername] = useState('');
  const handleClick = () => {
    try {
      props.firestore
        .collection('users')
        .add({
          created: Date.now(),
          name: username,
        })
        .then((response) => console.log({ response }));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Fragment>
      <input
        label="Username"
        value={username}
        onChange={({ target: { value } }) => setUsername(value)}
      />
      <button onClick={handleClick} disabled={!username}>
        Save
      </button>
      <FirestoreCollection
        path="users"
        render={({ data, isLoading }) =>
          isLoading ? (
            <h1>Loading</h1>
          ) : (
            data.map(({ name }, index) => (
              <h1 key={`${name}-${index}`}>{name}</h1>
            ))
          )
        }
      />
    </Fragment>
  );
};

Users.propTypes = {
  firestore: object,
};

export default withFirestore(Users);
