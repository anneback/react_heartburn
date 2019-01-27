import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Question = ({ question_text }) => {
  console.log('question_text', question_text);
  return (
    <>
      <div>{question_text}</div>
      <button type="button">Yes</button>
      <button type="button">No</button>
    </>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  question_text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  next: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Question;
