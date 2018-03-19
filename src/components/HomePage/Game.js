import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditGameOrCategoryForm from '../common/EditGameOrCategoryForm';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false
    }

    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  toggleEditForm() {
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    return (
      <li className="list-group-item">
        {
          this.state.editMode ? 
          <EditGameOrCategoryForm edit={ this.props.edit } hide={ this.toggleEditForm } { ...this.props } />
          : <div>
            <Link to={`/games/${ this.props.gameId }`}>{ this.props.title }</Link>
            <button className="btn btn-primary" onClick={ this.toggleEditForm }>Edit</button>
            <button className="btn btn-danger" onClick={ this.props.delete }>X</button>
          </div>
        }
      </li>
    );
  }
}

export default Game;