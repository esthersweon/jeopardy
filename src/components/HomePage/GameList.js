import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameList extends Component {
  render() {
    return (
      <div>
        <h2>Select Game to Play</h2>
        <hr/>

        <ul className="list-group">
          { this.props.games.map(game => {
            return <li key={ game.id } className="list-group-item">
              <Link to={`/games/${ game.id }`}>{ game.title }</Link>
            </li>
          }) }
        </ul>
      </div>
    );
  }
}

export default GameList;