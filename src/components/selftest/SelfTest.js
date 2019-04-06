import React, { Component } from 'react'

import Intro from './intro/Intro';
import Question from './question/Question';

import './SelfTest.scss';

class SelfTest extends Component {
  state = {
    questionNumber: 0,
    questions: {
      time: { 
        question: 'How many hours per day have you been gambling the past two weeks?',
        answer: '',
      },
      win_loss: { 
        question: 'What is your current amount of won/lost money?',
        answer: '',
      },
      deposit: { 
        question: 'How much money have you deposited in total?',
        answer: ''
      },
      nrofdeposits: { 
        question: 'How many times did you make a deposit because of no money?',
        answer: '',
      },
      salary: { 
        question: 'What is your monthly income?',
        answer: '',
      }
    },
  }

  onAnswerChange = (e) => {
    this.setState({
      questions: {
        ...this.state.questions,
        [e.target.name]: {
          ...this.state.questions[e.target.name],
          answer: e.target.value,
        }
      }
    })
  }

  setQuestionNumber = (number) => {
    this.setState({
      questionNumber: number,
    })
  }
  
  render() {
    const lista = Object.keys(this.state.questions).map((key, index) => {
      return <Question 
                key={key} 
                name={key} 
                question={this.state.questions[key].question}
                questionNr={index + 1}
                nrOfQuestions={Object.keys(this.state.questions).length} 
                onAnswerChange={this.onAnswerChange}
                currentQuestionNumber={this.state.questionNumber}
                setQuestionNumber={this.setQuestionNumber}
                />
    })
    return(
      <div className={"self-test"}>
        <Intro 
          active={this.state.questionNumber === 0}
          setQuestionNumber={this.setQuestionNumber}
          />
        {lista}
      </div>
    )
  }
}

export default SelfTest;  