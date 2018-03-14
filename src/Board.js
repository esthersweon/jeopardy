import React, { Component } from 'react';
import Card from './Card';
import './Board.css';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        { this.props.categories.map(category => {
          return <div className="Category">
            <h1>{ category.title }</h1>
            { category.cards.map(card => {
              return <Card 
                playMode={ this.props.playMode }
                points={ card.points } 
                answer={ card.answer } 
                question={ card.question } />
            })}
          </div>
        }) }
      </div>
    );
  }
}

export default Board;
