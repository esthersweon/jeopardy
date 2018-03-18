import React, { Component } from 'react';

class GameForm extends Component {
  constructor() {
    super()
    this.state = {
      gameTitle: ''
    }
    this.changeGameTitle = this.changeGameTitle.bind(this);
    this.addGame = this.addGame.bind(this);
  }

  changeGameTitle(e) {
    this.setState({ gameTitle: e.target.value })
  }

  addGame(e) {
    e.preventDefault();
    if (this.state.gameTitle) {
      this.props.add(this.state.gameTitle)
      this.setState({ gameTitle: '' })
      document.getElementById("add-game").reset();
    }
  }
  render() {
    return (
      <div className="GameForm">
        <h2>Create New Game</h2>
        <hr/>

        <form id="add-game" onSubmit={ this.addGame }>
          <div className="form-group">
            <input placeholder="Game Name" className="form-control" onChange={ this.changeGameTitle } />
          </div>
          <button type="submit" className="btn btn-primary">Add Game</button>
        </form>
      </div>
    );
  }
}

export default GameForm;
