import React, { Component } from 'react';
// import './CategoryForm.css';

class CategoryForm extends Component {
  constructor() {
    super()
    this.state = {
      categoryTitle: ''
    }
    this.changeCategoryTitle = this.changeCategoryTitle.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }

  changeCategoryTitle(e) {
    this.setState({ categoryTitle: e.target.value })
  }

  addCategory(e) {
    e.preventDefault();
    if (this.state.categoryTitle) {
      this.props.add(this.state.categoryTitle)
      this.setState({ categoryTitle: '' })
      document.getElementById("add-category").reset();
    }
  }
  render() {
    return (
      <div className="CategoryForm">
        <h3>Add Category</h3>
        <form id="add-category" onSubmit={ this.addCategory }>
          <div className="form-group">
            <input placeholder="Category Name" className="form-control" onChange={ this.changeCategoryTitle } />
          </div>
          <button type="submit" className="btn btn-primary">Add Category</button>
        </form>
      </div>
    );
  }
}

export default CategoryForm;
