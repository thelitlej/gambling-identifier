import React from 'react';

import './Question.scss';

const Question = (props) => {
  const isLast = props.questionNr === props.nrOfQuestions;
  const isCurrentQuestion = props.questionNr === props.currentQuestionNumber;
  return (
    <div className={`question-container q${props.currentQuestionNumber}`}>
      <div className={"question" + (isCurrentQuestion ? ' active': '')}>
        <p className="text">{props.question}</p>
        <div className="input-container">
          <input className="input" type='text' name={props.name} onChange={props.onAnswerChange} placeholder="Your answer"/>
          <div className="input-line"/>
          <div className="input-line-unfocused"/>
        </div>
        <div className="buttons">
        <button className="button" onClick={!isLast ? () => {props.setQuestionNumber(props.questionNr+1)}: () => {}}>
              {isLast 
                ? 'Summary'
                : 'Next'
              }
          </button>
          <button className="button" onClick={() => {props.setQuestionNumber(props.questionNr-1)}}>Back</button>
        </div>
        <p>{`Question ${props.questionNr}/${props.nrOfQuestions}`}</p>
      </div>
    </div>
  )
}

export default Question;