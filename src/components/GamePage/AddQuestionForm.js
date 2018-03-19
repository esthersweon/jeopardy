import React, { Component } from 'react';
import './AddQuestionForm.css';

class AddQuestionForm extends Component {
  constructor() {
    super();
    this.state = {
      questionText: '',
      questionAnswer: '',
    }
    this.addQuestion = this.addQuestion.bind(this);
  }
  addQuestion(e) {
    e.preventDefault();

    this.props.add({
      text: this.state.questionText, 
      answer: this.state.questionAnswer
    })

    this.setState({
      questionText: '',
      questionAnswer: '',
    });

    document.getElementById(`add-question-${ this.props.categoryId }`).reset();
  }
  modifyState(stateKey) {
    return (e) => {
      this.setState({[stateKey]: e.target.value });
    }
  }
  render() {
    return (
      <div className="AddQuestionForm">
        <form onSubmit={ this.addQuestion } id={`add-question-${ this.props.categoryId }`}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
              </div>
            </div>
            {/*<div className="col-6">
              <div className="form-group">
                { [100, 200, 300, 400, 500].map(opt => {
                    return <div key={ opt }>
                      <textarea 
                        key={ opt } 
                        type="radio" 
                        name="points" 
                        onChange={ this.modifyState('questionPoints') } />
                      { opt }
                    </div>
                }) }
              </div>
            </div>*/}
          </div>
          <div className="form-group">
            <textarea placeholder="Question" className="form-control" onChange={ this.modifyState('questionText') } />
          </div>
          <div className="form-group">
            <textarea placeholder="Answer" className="form-control" onChange={ this.modifyState('questionAnswer') } />
          </div>
          <button type="submit" className="btn btn-primary">Add Question</button>
        </form>
      </div>
    );
  }
}

export default AddQuestionForm;
