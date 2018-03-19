import React, { Component } from 'react';

class AddQuestionForm extends Component {
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
    
    document.getElementById("add-question").reset();
  }
  modifyState(stateKey) {
    return (e) => {
      this.setState({[stateKey]: e.target.value })
    }
  }
  render() {
    return (
      <div className="AddQuestionForm">
        <h3>Add Question</h3>
        <form onSubmit={ this.addQuestion } id="add-question">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                { this.props.categories.map(category => {
                  return <div key={ category.id }>
                    <input 
                      key={ category.id } 
                      type="radio" 
                      name="category-title" 
                      onChange={ this.modifyState('questionCategory') }/>
                    { category.title }
                  </div>
                }) }
              </div>
            </div>
            {/*<div className="col-6">
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
            </div>*/}
          </div>
          <div className="form-group">
            <input placeholder="Question" className="form-control" onChange={ this.modifyState('questionText') } />
          </div>
          <div className="form-group">
            <input placeholder="Answer" className="form-control" onChange={ this.modifyState('questionAnswer') } />
          </div>
          <button type="submit" className="btn btn-primary">Add Question</button>
        </form>
      </div>
    );
  }
}

export default AddQuestionForm;
