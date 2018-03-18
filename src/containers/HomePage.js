import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor() {
    super(); 

    this.state = {
      games: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/games').then(res => {
      return res.json();
    }).then(games => {
      this.setState({ games })
    })
  }
  render() {
    return (
      <div className="App-body container">
        <h2>Select a game to play:</h2>
        <hr/>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <ul className="list-group">
              { this.state.games.map(game => {
                return <li className="list-group-item">
                  <Link to={`/games/${ game.id }`}>{ game.title }</Link>
                </li>
              }) }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
