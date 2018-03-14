import React, { Component } from 'react';
// import './CardForm.css';

class CardForm extends Component {
  constructor() {
    super();
    this.state = {
      cardCategory: null,
      cardPoints: null,
      cardAnswer: '',
      cardQuestion: '',
    }
    this.addCard = this.addCard.bind(this);
  }
  addCard(e) {
    e.preventDefault();
    // if (!this.state.cardCategory || !this.state.cardPoints) {
    //   this.setState({
    //     cardCategory: this.state.cardCategory || this.props.categories[0],
    //     cardPoints: this.state.cardPoints || 100
    //   }, () => {
    //     this.props.add(this.state.cardCategory, {
    //       points: this.state.cardPoints, 
    //       answer: this.state.cardAnswer, 
    //       question: this.state.cardQuestion
    //     })
    //   })
    // } else {
    this.props.add(this.state.cardCategory, {
      points: this.state.cardPoints, 
      answer: this.state.cardAnswer, 
      question: this.state.cardQuestion
    })
    // }

    this.setState({
      cardCategory: null,
      cardPoints: null,
      cardAnswer: '',
      cardQuestion: '',
    });
    document.getElementById("add-card").reset();
  }
  modifyState(stateKey) {
    return (e) => {
      this.setState({[stateKey]: e.target.value })
    }
  }
  render() {
    return (
      <div className="CardForm">
        <h2>Add Card</h2>
        <form onSubmit={ this.addCard } id="add-card">
          <div className="form-group">
            <select className="form-control" onChange={ this.modifyState('cardCategory') }>
              { this.props.categories.map(opt => {
                  return <option>{ opt }</option>
              }) }
            </select>
          </div>
          <div className="form-group">
            <select className="form-control" onChange={ this.modifyState('cardPoints') }>
              { [100, 200, 300, 400, 500].map(opt => {
                  return <option>{ opt }</option>
              }) }
            </select>
          </div>
          <div className="form-group">
            <input placeholder="Card Answer" className="form-control" onChange={ this.modifyState('cardAnswer') } />
          </div>
          <div className="form-group">
            <input placeholder="Card Question" className="form-control" onChange={ this.modifyState('cardQuestion') } />
          </div>
          <button type="submit" className="btn btn-primary">Add Card</button>
        </form>
      </div>
    );
  }
}

export default CardForm;
