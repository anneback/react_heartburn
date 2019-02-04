import React from 'react';
import PropTypes from 'prop-types';

import { NextButton } from '..';
import { AnswerButton } from '..';

const Question = ({
  currentQuestion,
  verdict,
  questions,
  score: totalScore,
  setScore,
  setQuestion,
  selectedAnswer,
  resetAnswer,
  setVerdict,
  outcomes,
  resetQuestion,
  classes
}) => {
  if (!currentQuestion) {
    return null;
  }

  const { question_text, answers, next } = currentQuestion;
  return (
    <div className={classes.questionContainer}>
      <div className={classes.textContainer}>
        <div className={classes.text}>{question_text}</div>
        <div className={classes.line} />
      </div>
      <div className={classes.buttonContainer}>
        <AnswerButton answer={answers[0]} selectedAnswer={selectedAnswer} />
        <AnswerButton answer={answers[1]} selectedAnswer={selectedAnswer} />
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
  currentQuestion: PropTypes.shape(),
  outcomes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selectedAnswer: PropTypes.shape(),
  setScore: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
  resetAnswer: PropTypes.func.isRequired,
  verdict: PropTypes.shape(),
  setVerdict: PropTypes.func.isRequired,
  resetQuestion: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired
};

Question.default = {
  currentQuestion: null,
  selectedAnswer: null,
  verdict: null
};

export default Question;
