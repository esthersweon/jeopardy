import React, { Component } from 'react';
// import './QuestionForm.css';

class QuestionForm extends Component {
  constructor() {
    super();
    this.state = {
      questionCategory: null,
      questionPoints: null,
      questionText: '',
      questionAnswer: '',
    }
    this.addQuestion = this.addQuestion.bind(this);
  }
  addQuestion(e) {
    e.preventDefault();
    // if (!this.state.questionCategory || !this.state.questionPoints) {
    //   this.setState({
    //     questionCategory: this.state.questionCategory || this.props.categories[0],
    //     questionPoints: this.state.questionPoints || 100
    //   }, () => {
    //     this.props.add(this.state.questionCategory, {
    //       points: this.state.questionPoints, 
    //       answer: this.state.questionText, 
    //       question: this.state.questionAnswer
    //     })
    //   })
    // } else {
    this.props.add(this.state.questionCategory, {
      points: this.state.questionPoints, 
      answer: this.state.questionText, 
      question: this.state.questionAnswer
    })
    // }

    this.setState({
      questionCategory: null,
      questionPoints: null,
      questionText: '',
      questionAnswer: '',
    });
    document.getElementById("add-question").reset();
  }
  modifyState(stateKey) {
    return (e) => {
      this.setState({[stateKey]: e.target.value })
    }
  }
  render() {
    return (
      <div className="QuestionForm">
        <h3>Add Question</h3>
        <form onSubmit={ this.addQuestion } id="add-question">
          <div className="form-group">
            <select className="form-control" onChange={ this.modifyState('questionCategory') }>
              { this.props.categories.map(category => {
                  return <option key={ category.id }>{ category.title }</option>
              }) }
            </select>
          </div>
          <div className="form-group">
            <select className="form-control" onChange={ this.modifyState('questionPoints') }>
              { [100, 200, 300, 400, 500].map(opt => {
                  return <option key={ opt }>{ opt }</option>
              }) }
            </select>
          </div>
          <div className="form-group">
            <input placeholder="Question" className="form-control" onChange={ this.modifyState('questionText') } />
          </div>
          <div className="form-group">
            <input placeholder="Answer" className="form-control" onChange={ this.modifyState('questionAnswer') } />
          </div>
          <button type="submit" className="btn btn-primary">Add Card</button>
        </form>
      </div>
    );
  }
}

export default QuestionForm;
