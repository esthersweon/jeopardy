import React, { Component } from 'react';
import Game from '../components/HomePage/Game';
import GameForm from '../components/HomePage/GameForm';

class HomePage extends Component {
  constructor() {
    super(); 
    this.state = {
      games: []
    };

    this.getGames = this.getGames.bind(this);
    this.addGame = this.addGame.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    fetch('http://localhost:3000/api/games')
      .then(res => res.json())
      .then(games => {
        this.setState({ games })
      });
  }

  addGame() {
    fetch('http://localhost:3000/api/games', {
        method: 'POST'
      })
      .then(res => res.json())
      .then(game => {
        this.setState({ games: this.state.games.concat(game) })
      });
  }

  deleteGame(gameId) {
    return () => {
      fetch(`http://localhost:3000/api/games/${ gameId }`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(gameDeleted => {
          if (gameDeleted) {
            this.getGames();
          }
        });
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron App-header">
          <h1 className="display-4">Jeopardy</h1>
          <p className="lead">Follow the lead of America's Favorite Quiz Show to customize your own game & play with friends!</p>
          <hr className="my-4"/>

          <p className="lead">Use for game night, classroom review, or even self-study.</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Select Game to Play</h2>
              <hr/>

              <ul className="list-group">
                { this.state.games.map(game => {
                  return <Game 
                    key={ game.id} 
                    gameId={ game.id } 
                    title={ game.title } 
                    delete={ this.deleteGame(game.id) }/>
                  })
                }
              </ul>
            </div>

            <div className="col-md-6">
              <GameForm add={ this.addGame }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
