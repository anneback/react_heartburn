import React from 'react';
import PropTypes from 'prop-types';

const onClickHandler = (setAnswer, answer) => {
  setAnswer(answer);
};

const AnswerButton = ({ setAnswer, answer, classes }) => (
  <div
    className={classes.button}
    onClick={() => onClickHandler(setAnswer, answer)}
  >
    {answer.label}
  </div>
);

AnswerButton.propTypes = {
  setAnswer: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired
};

export default AnswerButton;
