import React, { Component } from 'react';
import Board from '../Board';
import CategoryForm from '../CategoryForm';
import CardForm from '../CardForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      categories: []
    }
    this.toggleIsPlaying = this.toggleIsPlaying.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.addCard = this.addCard.bind(this);
  }
  toggleIsPlaying() {
    this.setState({ isPlaying: !this.state.isPlaying });
  }
  addCategory(category = 'Category A') {
    let allCategoryTitles = this.state.categories.map(category => category.title)
    if (allCategoryTitles.indexOf(category) === -1) {
      this.setState({categories: this.state.categories.concat([{
        title: category,
        cards: []
      }])})
    }
  }
  addCard(category = 'Category A', card = {points: 100, answer: 'Hypertext Markup Language', question: 'What is HTML?'}) {
    let allCategoryTitles = this.state.categories.map(category => category.title)
    let clonedCategories = Object.assign(this.state.categories)
    let categoryId = allCategoryTitles.indexOf(category)
    if (categoryId > -1) {
      clonedCategories[categoryId].cards.push(card)
      this.setState({ categories: clonedCategories })
    }
  }
  render() {
    let allCategoryTitles = this.state.categories.map(category => category.title);
    return (
      <div className="App-body container">
        { 
          !this.state.isPlaying ? 
          <div>
            <div className="row">
              <div className="col-md-6">
                <CategoryForm add={ this.addCategory } />
              </div>
              <div className="col-md-6">
                <CardForm categories={ allCategoryTitles } add={ this.addCard } />
              </div>
            </div>
          </div>
          : null
        }
        <Board playMode={ this.state.isPlaying } categories={ this.state.categories }/>
        <button onClick={ this.toggleIsPlaying } className="btn btn-info">
          { this.state.isPlaying ? 'End Game' : 'Start Game' }
        </button>
      </div>
    );
  }
}

export default App;
