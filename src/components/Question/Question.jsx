import React from 'react';
import PropTypes from 'prop-types';

import { NextButton } from '..';
import { AnswerButton } from '..';

const Question = ({
  currentQuestion: { answers, question_text, next },
  verdict,
  questions,
  score: totalScore,
  setAnswer,
  setScore,
  setQuestion,
  selectedAnswer,
  resetAnswer,
  setVerdict,
  resetVerdict,
  outcomes,
  resetQuestion,
  classes
}) => {
  return (
    <div className={classes.questionContainer}>
      <div className={classes.text}>{question_text}</div>
      <div className={classes.buttonContainer}>
        <AnswerButton answer={answers[0]} />
        <AnswerButton answer={answers[1]} />
      </div>
      <div>
        {answers[0].label}
        <input
          type='radio'
          name='answer'
          onClick={() => setAnswer(answers[0])}
        />
        {answers[1].label}
        <input
          type='radio'
          name='answer'
          onClick={() => setAnswer(answers[1])}
        />
      </div>
      {verdict !== null ? (
        <button type='button'>Book meeting</button>
      ) : (
        <NextButton
          next={next}
          totalScore={totalScore}
          questions={questions}
          setScore={setScore}
          setQuestion={setQuestion}
          selectedAnswer={selectedAnswer}
          resetAnswer={resetAnswer}
          verdict={verdict}
          setVerdict={setVerdict}
          outcomes={outcomes}
          resetQuestion={resetQuestion}
        />
      )}
    </div>
  );
};

Question.propTypes = {
  question_text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  next: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  outcomes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selectedAnswer: PropTypes.shape().isRequired,
  setScore: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
  resetAnswer: PropTypes.func.isRequired,
  verdict: PropTypes.shape().isRequired,
  setVerdict: PropTypes.func.isRequired,
  resetVerdict: PropTypes.func.isRequired,
  resetQuestion: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired
};

export default Question;
