import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const onClickHandler = (setAnswer, answer) => {
  setAnswer(answer);
};

const AnswerButton = ({ setAnswer, answer, selectedAnswer, classes }) => {
  return (
    <div
      name={answer.label}
      className={cn(classes.button, {
        active: selectedAnswer !== null && selectedAnswer.id === answer.id
      })}
      onClick={() => onClickHandler(setAnswer, answer)}
    >
      {answer.label}
    </div>
  );
};

AnswerButton.propTypes = {
  setAnswer: PropTypes.func.isRequired,
  answer: PropTypes.shape().isRequired,
  selectedAnswer: PropTypes.shape(),
  classes: PropTypes.shape().isRequired
};

AnswerButton.defaultProps = {
  selectedAnswer: null
};

export default AnswerButton;
