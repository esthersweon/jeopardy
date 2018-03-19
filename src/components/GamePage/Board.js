import React, { Component } from 'react';
import Category from './Category';
import AddCategoryForm from './AddCategoryForm';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };

    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/games/${ this.props.gameId }/categories`)
      .then(res => res.json())
      .then(categories => {
        this.setState({ categories });
      })
  }

  addCategory(category) {
    let allCategoryTitles = this.state.categories.map(category => category.title);

    if (allCategoryTitles.indexOf(category) === -1) {
      console.log({ title: category });
      fetch(`http://localhost:3000/api/games/${ this.props.gameId }/categories/`, {
          method: 'POST',
          body: JSON.stringify({ title: category }),
          headers: {
           'content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(newCategory => {
          this.setState({categories: this.state.categories.concat([newCategory])})
        });
    }
  }

  deleteCategory(categoryId) {
    return () => {
      fetch(`http://localhost:3000/api/categories/${ categoryId }`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(categoryDeleted => {
          categoryDeleted && this.setState({ categories: this.state.categories.filter(category => category.id !== categoryId) });
        });
    };
  }

  render() {
    return (
      <div className="Board">
        { 
          this.state.categories.map(category => {
            return <Category 
              key={ category.id }
              categoryId={ category.id } 
              playMode={ this.props.playMode } 
              title={ category.title }
              deleteCategory={ this.deleteCategory }/>
          })
        }

        { !this.props.playMode && <AddCategoryForm add={ this.addCategory } /> }
      </div>
    );
  }
}

export default Board;