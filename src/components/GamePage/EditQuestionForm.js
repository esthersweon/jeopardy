import React, { Component } from 'react';

class EditQuestionForm extends Component {
  constructor() {
    super();
    this.state = {
      questionPoints: null,
      questionText: '',
      questionAnswer: '',
    }
    this.editQuestion = this.editQuestion.bind(this);
  }
  editQuestion(e) {
    e.preventDefault();
    this.props.edit({
      points: this.state.questionPoints || this.props.points, 
      text: this.state.questionText || this.props.text,
      answer: this.state.questionAnswer || this.props.answer
    });

    this.setState({
      questionPoints: null,
      questionText: '',
      questionAnswer: '',
    });

    this.props.hide();
    
    document.getElementById("edit-question").reset();
  }
  modifyState(stateKey) {
    return (e) => {
      this.setState({[stateKey]: e.target.value })
    }
  }
  render() {
    return (
      <div className="EditQuestionForm">
        <form onSubmit={ this.editQuestion } id="edit-question">
          <div className="form-group">
            <input 
              defaultValue={ this.props.points }
              placeholder="# of Points" 
              className="form-control" 
              onChange={ this.modifyState('questionPoints') } />
          </div>
          <div className="form-group">
            <input 
              defaultValue={ this.props.text }
              placeholder="Question" 
              className="form-control" 
              onChange={ this.modifyState('questionText') } />
          </div>
          <div className="form-group">
            <input 
              defaultValue={ this.props.answer }
              placeholder="Answer" 
              className="form-control" 
              onChange={ this.modifyState('questionAnswer') } />
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

export default EditQuestionForm;
