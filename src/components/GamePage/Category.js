import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

class Category extends Component {
  constructor() {
    super()
    this.state = {
      questions: []
    }
  }
  componentDidMount() {
    fetch(`http://localhost:3000/api/categories/${ this.props.categoryId }/questions`).then(res => {
        return res.json();
    }).then(questions => {
        this.setState({ questions })
    })
  }
  render() {
    return (
      <div>
        { this.state.questions.map(question => {
          return <QuestionCard 
            key={ question.id }
            playMode={ this.props.playMode }
            points={ question.points } 
            text={ question.text }
            answer={ question.answer } 
            deleteQuestion={ this.props.deleteQuestion } />
        }) }
      </div>
    );
  }
}

export default Category;
