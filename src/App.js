import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddItem from './AddItem';
import './App.css';
import Footer from './components/Footer';
import List from './List';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path="/">
                  Home
              </Route>
              <Route activeStyle={{fontWeight: 700}} exact path="/list">
                  <List />
              </Route>
              <Route activeStyle={{fontWeight: 700}} exact path="/add-item">
                  <AddItem />
              </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
