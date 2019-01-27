import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const isOutcome = nextList => nextList.some(next => next.keys() === 'outcome');

const getNextQuestion = (nextList, answerId, outcomeList, outcomeId) => {
  let nextQuestion = '';
  if (nextList.length > 1 && !isOutcome(nextList)) {
    // Has multiple choices, like first question
    nextQuestion = nextList.filter(alternative => alternative.answered === answerId);
  } else if (isOutcome(nextList)) {
    // Is an outcome
    nextQuestion = outcomeList.filter(outcome => outcome.id === outcomeId);
  } else {
    // other questions
    nextQuestion = nextList[0].next_question;
  }
  return nextQuestion;
};

const Question = ({ id, question_text, answers, next, setScore }) => {
  return (
    <div>
      <div>{question_text}</div>
      <div>
        <button onClick={() => setScore(answers[0].score)}>{answers[0].label}</button>
        <button onClick={() => setScore(answers[1].score)}>{answers[1].label}</button>
      </div>
      <button>Next</button>
    </div>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  question_text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  next: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Question;
