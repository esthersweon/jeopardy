import React, { Component } from 'react';
import Board from '../components/GamePage/Board';
import CategoryForm from '../components/GamePage/CategoryForm';
import AddQuestionForm from '../components/GamePage/AddQuestionForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      isPlaying: false,
      categories: []
    }
    this.toggleIsPlaying = this.toggleIsPlaying.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }
  componentDidMount() {
    let gameId = this.props.match.params.game_id;
    fetch(`http://localhost:3000/api/games/${ gameId }`)
      .then(res => {
        return res.json();
      }).then(game => {
        this.setState({ title: game.title }, () => {

          fetch(`http://localhost:3000/api/games/${ gameId }/categories`)
            .then(res => {
              return res.json();
            }).then(categories => {
              this.setState({ categories });
            })
        });
      })
  }
  toggleIsPlaying() {
    this.setState({ isPlaying: !this.state.isPlaying });
  }
  addCategory(category) {
    let allCategoryTitles = this.state.categories.map(category => category.title)
    if (allCategoryTitles.indexOf(category) === -1) {
      fetch('http://localhost:3000/api/categories/', {
        method: 'POST',
        body: JSON.stringify({ title: this.state.categoryTitle }),
        headers: {
          'content-type': 'application/json'
        },
      }).then(res => {
        return res.json();
      }).then(newCategory => {
        debugger;
        this.setState({categories: this.state.categories.concat([newCategory])})
      })
    }
  }
  addQuestion(category = 'Category A', card = {points: 100, answer: 'Hypertext Markup Language', question: 'What is HTML?'}) {
    // let allCategoryTitles = this.state.categories.map(category => category.title)
    // let clonedCategories = Object.assign(this.state.categories)
    // let categoryId = allCategoryTitles.indexOf(category)
    // if (categoryId > -1) {
    //   clonedCategories[categoryId].cards.push(card)
    //   this.setState({ categories: clonedCategories })
    // }
  }
  deleteQuestion() {
    fetch('http://localhost:3000/api/categories/', {
      method: 'POST',
      body: JSON.stringify({ title: this.state.categoryTitle }),
      headers: {
        'content-type': 'application/json'
      },
    }).then(res => {
      return res.json();
    }).then(newCategory => {
      debugger;
      this.setState({categories: this.state.categories.concat([newCategory])})
    })
  }
  render() {
    return (
      <div className="App-body container">
        <h2>{ this.state.title }</h2>
        <hr/>

        { 
          !this.state.isPlaying ? 
          <div>
            <div className="row">
              <div className="col-md-6">
                <CategoryForm add={ this.addCategory } />
              </div>
              <div className="col-md-6">
                <AddQuestionForm categories={ this.state.categories } add={ this.addQuestion } />
              </div>
            </div>
          </div>
          : null
        }
        
        <button onClick={ this.toggleIsPlaying } className="btn btn-info">
          { this.state.isPlaying ? 'Edit Game' : 'Start Game' }
        </button>

        <Board 
          playMode={ this.state.isPlaying } 
          categories={ this.state.categories }
          deleteQuestion={ this.deleteQuestion } />
      </div>
    );
  }
}

export default App;
