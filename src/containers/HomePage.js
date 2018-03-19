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
      <div>
        <div className="jumbotron App-header">
          <h1 className="display-4">Jeopardy</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"/>

          <p className="lead">It uses utility classNames for typography and spacing to space content out within the larger container.</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <GameList games={ this.state.games } />
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
