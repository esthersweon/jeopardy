import React, { Component } from 'react';

class EditCategoryForm extends Component {
  constructor() {
    super();
    this.state = {
      categoryTitle: ''
    };

    this.editCategory = this.editCategory.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
  }

  editCategory(e) {
    e.preventDefault();
    this.props.edit({
      title: this.state.categoryTitle || this.props.title
    });

    this.setState({
      categoryTitle: ''
    });

    this.props.hide();
    
    document.getElementById("edit-question").reset();
  }

  saveTitle(e) {
    this.setState({ categoryTitle: e.target.value })
  }

  render() {
    return (
      <div className="EditCategoryForm">
        <form onSubmit={ this.editCategory } id="edit-question">
          <div className="form-group">
            <input 
              defaultValue={ this.props.title }
              placeholder="Title" 
              className="form-control" 
              onChange={ this.saveTitle } />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button onClick={ this.props.hide } className="btn btn-danger">
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default EditCategoryForm;
