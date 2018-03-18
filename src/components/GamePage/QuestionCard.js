import React, { Component } from 'react';
import EditQuestionForm from './EditQuestionForm';
import './QuestionCard.css';

class QuestionCard extends Component {
  constructor() {
    super()
    this.state = {
      status: 'default',
      editMode: false
    }
    this.flipOrEditCard = this.flipOrEditCard.bind(this)
  }
  flipOrEditCard() {
    if (this.props.playMode) {
      if (this.state.status == 'default') {
        this.setState({ status: 'flipped' })
      } else if (this.state.status == 'flipped') {
        this.setState({ status: 'revealed' })
      } else {
        this. setState({ status: 'disabled' })
      }
    } else {
      this.setState({ editMode: !this.state.editMode })
    }
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
      <div className={ `QuestionCard ${this.state.status}` } onClick={ this.flipOrEditCard }>
        <div>
          { this.props.playMode && displayMap[this.state.status] }
          { 
            !this.props.playMode && 
            (this.state.editMode ? <EditQuestionForm/> : displayMap.notPlayMode)
          }
        </div>
        { 
          !this.props.playMode && !this.state.editMode &&
          <button className="delete" onClick={ this.props.deleteQuestion }>
            X
          </button> 
        }
      </div>
    );
  }
}

export default QuestionCard;
