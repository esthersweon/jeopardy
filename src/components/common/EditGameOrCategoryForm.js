import React, { Component } from 'react';

class EditGameOrCategoryForm extends Component {
  constructor() {
    super();
    this.state = {
      categoryTitle: ''
    };

    this.editModel = this.editModel.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
  }

  editModel(e) {
    e.preventDefault();
    this.props.edit({
      title: this.state.categoryTitle || this.props.title
    });

    this.setState({
      categoryTitle: ''
    });

    this.props.hide();
    
    document.getElementById("edit-model").reset();
  }

  saveTitle(e) {
    this.setState({ categoryTitle: e.target.value })
  }

  render() {
    return (
      <div className="EditGameOrCategory">
        <form onSubmit={ this.editModel } id="edit-model">
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

export default EditGameOrCategoryForm;
