import React, { Component } from 'react';
import Category from './Category';
import AddCategoryForm from './AddCategoryForm';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };

    this.getCategories = this.getCategories.bind(this);
    this.sortCategories = this.sortCategories.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    fetch(`${ process.env.REACT_APP_BACKEND_URL }/api/games/${ this.props.gameId }/categories`)
      .then(res => res.json())
      .then(categories => {
        this.setState({ categories: this.sortCategories(categories) });
      })
  }

  sortCategories(categories) {
    return categories.sort((a, b) => {
      return a.id === b.id ? 0 : a.id - b.id;
    })
  }

  addCategory(category) {
    let allCategoryTitles = this.state.categories.map(category => category.title);

    if (allCategoryTitles.indexOf(category) === -1) {
      fetch(`${ process.env.REACT_APP_BACKEND_URL }/api/games/${ this.props.gameId }/categories/`, {
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

  editCategory(categoryId) {
    return (category) => {
      fetch(`${ process.env.REACT_APP_BACKEND_URL }/api/categories/${ categoryId }`, {
          method: 'PUT', 
          body: JSON.stringify(category),
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(categoryEdited => {
          categoryEdited && this.getCategories();
        });
    }
  }

  deleteCategory(categoryId) {
    return () => {
      fetch(`${ process.env.REACT_APP_BACKEND_URL }/api/categories/${ categoryId }`, {
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
              edit={ this.editCategory(category.id) }
              delete={ this.deleteCategory(category.id) }/>
          })
        }

        { !this.props.playMode && <AddCategoryForm add={ this.addCategory } /> }
      </div>
    );
  }
}

export default Board;