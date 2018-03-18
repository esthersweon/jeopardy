import React, { Component } from 'react';
import './QuestionCard.css';

class QuestionCard extends Component {
  constructor() {
    super()
    this.state = {
      status: 'default'
    }
    this.flipCard = this.flipCard.bind(this)
  }
  flipCard() {
    if (this.props.playMode) {
      if (this.state.status == 'default') {
        this.setState({ status: 'flipped' })
      } else if (this.state.status == 'flipped') {
        this.setState({ status: 'revealed' })
      } else {
        this. setState({ status: 'disabled' })
      }
    }
  }
  render() {
    let displayMap = {
      'default': <span>{ this.props.points }</span>,
      'flipped': <span>{ this.props.text }</span>,
      'revealed': <span>{ this.props.answer }</span>,
      'disabled': <span>{ this.props.points }</span>,
      'notPlayMode': <span>{ this.props.points } - { this.props.text } ({ this.props.answer })</span> 
    }
    return (
      <div className={ `Card ${this.state.status}` } onClick={ this.flipCard }>
        { !this.props.playMode && <button onClick={ this.props.deleteQuestion }>X</button> }
        { 
          this.props.playMode ? 
          displayMap[this.state.status]
          : displayMap.notPlayMode
        }
      </div>
    );
  }
}

export default QuestionCard;
