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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Jeopardy</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">All Games</Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Search"/>
                <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Search"/>
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Log In</button>
              </form>
            </div>
          </nav>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/games/:game_id" component={ GamePage }/>
        </div>
      </Router>
    );
  }
}

export default App;
