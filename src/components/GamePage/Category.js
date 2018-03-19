import React, { Component } from 'react';
import QuestionCard from './QuestionCard';
import AddQuestionForm from './AddQuestionForm';
import './Category.css';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      questionToEdit: null
    };

    this.getQuestions = this.getQuestions.bind(this);
    this.sortQuestions = this.sortQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.editQuestion = this.editQuestion.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    fetch(`http://localhost:3000/api/categories/${ this.props.categoryId }/questions`).then(res => {
      return res.json();
    }).then(questions => {
      this.setState({ questions: this.sortQuestions(questions) });
    })
  }

  sortQuestions(questions) {
    return questions.sort((a, b) => {
      return a.points === b.points ? 0 : a.points - b.points;
    })
  }

  addQuestion(question) {
    fetch(`http://localhost:3000/api/categories/${ this.props.categoryId }/questions`, {
      method: 'POST',
      body: JSON.stringify({ 
        categoryId: this.props.categoryId,
        points: (this.state.questions.length + 1) * 100,
        ...question
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      return res.json();
    }).then(newQuestion => {
      this.getQuestions();
    });
  }

  editQuestion(questionId) {
    return (question) => {
      fetch(`http://localhost:3000/api/questions/${ questionId }`, {
          method: 'PUT',
          body: JSON.stringify(question),
          headers: {
            'content-type': 'application/json'
          }
        }).then(res => res.json())
        .then(questionEdited => {
          if (questionEdited) {
            this.getQuestions();
          }
        })
    }
  }

  deleteQuestion(questionId) {
    return () => {
      fetch(`http://localhost:3000/api/questions/${ questionId }`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(questionDeleted => {
          questionDeleted && this.setState({ 
            questions: this.state.questions.filter(question => question.id !== questionId)
          });
        });
    }
  }

  render() {
    return (
      <div className="Category">
        <div className="controls">
          <h4>{ this.props.title }</h4>
          { 
            !this.props.playMode && 
            <button className="btn btn-danger" onClick={ this.props.deleteCategory(this.props.categoryId) }>
              X
            </button> 
          }
        </div>
        { this.state.questions.map(question => {
          return <QuestionCard 
            key={ question.id }
            playMode={ this.props.playMode }
            editMode={ question.id === this.state.questionToEdit }
            edit={ this.editQuestion(question.id) }
            delete={ this.deleteQuestion(question.id) } 
            { ...question } />
        }) }
        { !this.props.playMode && <AddQuestionForm categoryId={ this.props.categoryId } add={ this.addQuestion } /> }
      </div>
    );
  }
}

export default Category;
