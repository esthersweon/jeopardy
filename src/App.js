import React, { Component } from 'react';
import HomePage from './containers/HomePage';
import GamePage from './containers/GamePage';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Jeopardy</h1>
            <nav>
              <Link to="/">All Games</Link>
            </nav>
          </header>

          <hr/>

          <Route exact path="/" component={ HomePage }/>
          <Route path="/games/:game_id" component={ GamePage }/>
        </div>
      </Router>
    );
  }
}

export default App;
