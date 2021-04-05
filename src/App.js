import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import getToken from './lib/tokens'
import AddItem from './AddItem';
import './App.css';
import Footer from './components/Footer';
import List from './List';


function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('userToken')
    user && setToken(user)
  }, [token])

  const handleClick = () => {
    setToken(localStorage.setItem('userToken', getToken()))
  }



  return (
    <div className="App">
      <Router>
         {!token && <button onClick={() => handleClick()}>Login</button>}
          <Switch>
              <Route exact path="/">
                  {token ? <Redirect to="/list"/> : <div>Home</div> }
              </Route>
              {token && (
                <>
                  <Route activeStyle={{fontWeight: 700}} exact path="/list">
                      <List />
                  </Route>
                  <Route activeStyle={{fontWeight: 700}} exact path="/add-item">
                      <AddItem />
                  </Route>
                </>
              )}
          </Switch>
        {token && <Footer />}
      </Router>
    </div>
  );
}

export default App;
