import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Owners from '../Owners/Owners';
import Pets from '../Pets/Pets';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/owners"
            component={Owners}
          />
          <Route
            exact
            path="/pets"
            component={Pets}
          />
          {/* <div className="App">
            <Owners />
          </div> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
