import React, { Component } from 'react';
import GameList from '../components/HomePage/GameList';
import GameForm from '../components/HomePage/GameForm';

class HomePage extends Component {
  constructor() {
    super(); 

    this.state = {
      games: []
    }

    this.addGame = this.addGame.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/games').then(res => {
      return res.json();
    }).then(games => {
      this.setState({ games })
    })
  }

  addGame() {
    fetch('http://localhost:3000/api/games', {
      method: 'POST'
    }).then(res => {
      return res.json();
    }).then(game => {
      this.setState({ games: this.state.games.concat(game) })
    })
  }

  render() {
    return (
      <div className="App-body container">
        <div className="row">
          <div className="col-md-6">
            <GameList games={ this.state.games } />
          </div>

          <div className="col-md-6">
            <GameForm add={ this.addGame }/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
