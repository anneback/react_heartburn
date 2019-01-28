import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import NextButton from './NextButton';
class Question extends React.Component {
  getButton = (
    next,
    totalScore,
    score,
    questions,
    setScore,
    setQuestion,
    selectedAnswer,
    resetAnswer,
    verdict,
    setVerdict,
    outcomes,
    resetQuestion
  ) => {
    if (Object.keys(verdict).length > 0) {
      return <button type='button'>Book meeting</button>;
    }
    return (
      <NextButton
        next={next}
        totalScore={totalScore}
        score={score}
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
    );
  };

  render() {
    const {
      question_text,
      answers,
      next,
      verdict,
      questions,
      totalScore,
      setAnswer,
      setScore,
      setQuestion,
      selectedAnswer,
      resetAnswer,
      setVerdict,
      resetVerdict,
      outcomes,
      resetQuestion
    } = this.props;
    return (
      <div>
        <div>{question_text}</div>
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
        {this.getButton(
          next,
          totalScore,
          selectedAnswer.score,
          questions,
          setScore,
          setQuestion,
          selectedAnswer,
          resetAnswer,
          verdict,
          setVerdict,
          outcomes,
          resetQuestion
        )}
      </div>
    );
  }
}

Question.propTypes = {
  id: PropTypes.string.isRequired,
  question_text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape()),
  next: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  outcomes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selectedAnswer: PropTypes.shape().isRequired,
  setScore: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
  resetAnswer: PropTypes.func.isRequired,
  verdict: PropTypes.shape().isRequired,
  setVerdict: PropTypes.func.isRequired,
  resetVerdict: PropTypes.func.isRequired,
  resetQuestion: PropTypes.func.isRequired
};

Question.defaultProps = {
  answers: []
};

export default Question;
