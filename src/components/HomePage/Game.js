import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Game extends Component {
  render() {
    return (
      <li className="list-group-item">
        <Link to={`/games/${ this.props.gameId }`}>{ this.props.title }</Link>
        <button className="btn btn-danger" onClick={ this.props.delete }>X</button>
      </li>
    );
  }
}

export default Game;