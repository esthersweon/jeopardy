import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor() {
    super()
    this.state = {
      status: 'default'
    }
    this.flipCard = this.flipCard.bind(this)
  }
  flipCard() {
    if (this.state.status == 'default') {
      this.setState({ status: 'flipped' })
    } else if (this.state.status == 'flipped') {
      this.setState({ status: 'revealed' })
    } else {
      this. setState({ status: 'disabled' })
    }
  }
  render() {
    let displayMap = {
      'default': <span>{ this.props.points }</span>,
      'flipped': <span>{ this.props.answer }</span>,
      'revealed': <span>{ this.props.question }</span>,
      'disabled': <span>{ this.props.points }</span>,
      'notPlayMode': <span>{ this.props.points } - { this.props.answer } ({ this.props.question })</span> 
    }
    return (
      <div className={ `Card ${this.state.status}` } onClick={ this.flipCard }>
        { 
          this.props.playMode ? 
          displayMap[this.state.status]
          : displayMap.notPlayMode
        }
      </div>
    );
  }
}

export default Card;
