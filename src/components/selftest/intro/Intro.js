import React from 'react';

import './Intro.scss';

const Intro = (props) => {
  return (
    <div className={"intro-container" + (props.active ? ' active': '')}>
      <div className="intro">
        <button onClick={() => props.setQuestionNumber(1)}>Begin Self Test</button>
      </div>
    </div>
  )
}

export default Intro;