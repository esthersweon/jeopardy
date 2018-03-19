import React, { Component } from 'react';
import EditQuestionForm from './EditQuestionForm';
import './QuestionCard.css';

class QuestionCard extends Component {
  constructor() {
    super()
    this.state = {
      status: 'default',
      editMode: false
    };

    this.flipCard = this.flipCard.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }
  flipCard() {
    if (this.props.playMode) {
      if (this.state.status === 'default') {
        this.setState({ status: 'flipped' })
      } else if (this.state.status === 'flipped') {
        this.setState({ status: 'revealed' })
      } else {
        this.setState({ status: 'disabled' })
      }
    }
  }
  toggleEditForm() {
    this.setState({ editMode: !this.state.editMode })
  }
  render() {
    let displayMap = {
      'default': this.props.points,
      'flipped': this.props.text,
      'revealed': this.props.answer,
      'disabled': this.props.points,
      'notPlayMode': `${ this.props.points } - ${ this.props.text } (${ this.props.answer })`
    }
    return (
      <div className={ `QuestionCard ${this.state.status}` } onClick={ this.flipCard }>
        { 
          !this.props.playMode && !this.state.editMode &&
          <div className="controls">
            <button className="btn btn-primary" onClick={ this.toggleEditForm }>
              Edit
            </button>
            <button className="btn btn-danger" onClick={ this.props.delete }>
              X
            </button> 
          </div>
        }
        <div>
          { this.props.playMode && displayMap[this.state.status] }
          { 
            !this.props.playMode && 
            (this.state.editMode ? <EditQuestionForm edit={ this.props.edit } hide={ this.toggleEditForm } { ...this.props } /> : displayMap.notPlayMode)
          }
        </div>
      </div>
    );
  }
}

export default QuestionCard;
