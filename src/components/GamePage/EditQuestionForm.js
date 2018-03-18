import React, { Component } from 'react';

class EditQuestionForm extends Component {
  constructor() {
    super();
    this.state = {
      questionCategory: null,
      questionPoints: null,
      questionText: '',
      questionAnswer: '',
    }
    this.editQuestion = this.editQuestion.bind(this);
  }
  editQuestion(e) {
    e.preventDefault();
    this.props.add(this.state.questionCategory, {
      points: this.state.questionPoints, 
      answer: this.state.questionText, 
      question: this.state.questionAnswer
    })

    this.setState({
      questionCategory: null,
      questionPoints: null,
      questionText: '',
      questionAnswer: '',
    });
    
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
            { [100, 200, 300, 400, 500].map(opt => {
                return <div key={ opt }>
                  <input 
                    key={ opt } 
                    type="radio" 
                    name="points" 
                    onChange={ this.modifyState('questionPoints') } />
                  { opt }
                </div>
            }) }
          </div>
          <div className="form-group">
            <input placeholder="Question" className="form-control" onChange={ this.modifyState('questionText') } />
          </div>
          <div className="form-group">
            <input placeholder="Answer" className="form-control" onChange={ this.modifyState('questionAnswer') } />
          </div>
          <button type="submit" className="btn btn-primary">Edit</button>
        </form>
      </div>
    );
  }
}

export default EditQuestionForm;
