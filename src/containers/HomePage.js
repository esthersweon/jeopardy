import React, { Component } from 'react';
// import './HomePage.css';
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
      <div>
        <h2>Select a game to play:</h2>
        <ul>
          { this.state.games.map(game => {
            return <li>
              <Link to={`/games/${ game.id }`}>{ game.title }</Link>
            </li>
          }) }
        </ul>
      </div>
    );
  }
}

export default HomePage;
