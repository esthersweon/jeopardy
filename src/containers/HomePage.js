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
    this.sortGames = this.sortGames.bind(this);
    this.addGame = this.addGame.bind(this);
    this.editGame = this.editGame.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    fetch(`${ process.env.REACT_APP_BACKEND_URL }/api/games`)
      .then(res => res.json())
      .then(games => {
        this.setState({ games: this.sortGames(games) })
      });
  }

  sortGames(games) {
    return games.sort((a, b) => {
      return a.id === b.id ? 0 : a.id - b.id;
    })
  }

  addGame(gameTitle) {
    fetch(`${ process.env.REACT_APP_BACKEND_URL }/api/games`, {
        method: 'POST',
        body: JSON.stringify({ title: gameTitle }),
        headers: {
          'content-type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(game => {
        this.setState({ games: this.state.games.concat(game) })
      });
  }

  editGame(gameId) {
    return (game) => {
      fetch(`${ process.env.REACT_APP_BACKEND_URL }/api/games/${ gameId }`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(game)
        })
        .then(res => res.json())
        .then(gameEdited => {
          if (gameEdited) {
            this.getGames();
          }
        });
    }
  }

  deleteGame(gameId) {
    return () => {
      fetch(`${ process.env.REACT_APP_BACKEND_URL }/api/games/${ gameId }`, {
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
            <div className="col-md-8">
              <h2>Select Game to Play</h2>
              <hr/>

              <ul className="list-group">
                { this.state.games.map(game => {
                  return <Game 
                    key={ game.id} 
                    gameId={ game.id } 
                    title={ game.title } 
                    edit={ this.editGame(game.id) }
                    delete={ this.deleteGame(game.id) }/>
                  })
                }
              </ul>
            </div>

            <div className="col-md-4">
              <GameForm add={ this.addGame }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
