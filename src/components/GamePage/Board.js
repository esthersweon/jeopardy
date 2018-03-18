import React, { Component } from 'react';
import Category from './Category';
import './Board.css';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        { this.props.categories.map(category => {
          return <div className="Category" key={ category.id }>
            <h4>{ category.title }</h4>
            <Category 
              playMode={ this.props.playMode } 
              categoryId={ category.id }
              deleteQuestion={ this.props.deleteQuestion } />
          </div>
        }) }
      </div>
    );
  }
}

export default Board;
