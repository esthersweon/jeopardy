import React, { Component } from 'react';
import Board from '../components/GamePage/Board';
import './GamePage.css';

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      isPlaying: false
    };

    this.toggleIsPlaying = this.toggleIsPlaying.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/games/${ this.props.match.params.game_id }`)
      .then(res => {
        return res.json();
      }).then(game => {
        this.setState({ title: game.title });
      });
  }

  toggleIsPlaying() {
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  render() {
    return (
      <div className="GamePage">
        <h2 className="title">{ this.state.title }</h2>
        <button 
          className="btn btn-success btn-lg game-toggle"
          onClick={ this.toggleIsPlaying } >
          { this.state.isPlaying ? 'Edit Game' : 'Start Game' }
        </button>

        <Board 
          gameId={ this.props.match.params.game_id } 
          playMode={ this.state.isPlaying } />
      </div>
    );
  }
}

export default GamePage;