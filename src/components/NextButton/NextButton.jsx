import React from 'react';
import PropTypes from 'prop-types';

const isNextOutcome = nextList =>
  nextList.some(next => Object.keys(next).some(key => key === 'outcome'));

const getQuestionFromList = (questions, nextQuestionId) => {
  return questions.filter(question => {
    return question.id === nextQuestionId;
  })[0];
};

const getOutcomeFromList = (outcomes, outcomeId) =>
  outcomes.filter(outcome => {
    return outcome.id === outcomeId;
  })[0];

const nextOnClick = (
  questions,
  nextList,
  selectedAnswer,
  totalScore,
  setScore,
  setQuestion,
  resetAnswer,
  setVerdict,
  outcomesList
) => {
  const { id: selectedAnswerId, score } = selectedAnswer;

  if (nextList.length > 1 && isNextOutcome(nextList)) {
    let outcomeQuestion;
    // Next step is an outcome
    if (totalScore < nextList[0].max_score) {
      outcomeQuestion = nextList[0];
    } else if (totalScore < nextList[1].max_score) {
      outcomeQuestion = nextList[1];
    } else {
      outcomeQuestion = nextList[2];
    }
    const verdict = getOutcomeFromList(outcomesList, outcomeQuestion.outcome);
    setVerdict(verdict);
    resetAnswer();
  } else if (nextList.length > 1 && !isNextOutcome(nextList)) {
    // Has multiple choices, like the first question in the list
    const multiQuestion = nextList.filter(
      next => next.answered === selectedAnswerId
    )[0];

    const nextQuestion = getQuestionFromList(
      questions,
      multiQuestion.next_question
    );
    setScore(totalScore + score);
    resetAnswer();
    setQuestion(nextQuestion);
  } else {
    // other questions
    const nextQuestion = getQuestionFromList(
      questions,
      nextList[0].next_question
    );
    setScore(totalScore + score);
    resetAnswer();
    setQuestion(nextQuestion);
  }
};

const NextButton = ({
  questions,
  next,
  totalScore,
  selectedAnswer,
  resetAnswer,
  setScore,
  setQuestion,
  setVerdict,
  outcomes,
  resetQuestion,
  classes
}) => {
  return (
    <button
      className={classes.button}
      type='button'
      disabled={selectedAnswer == null}
      onClick={() =>
        nextOnClick(
          questions,
          next,
          selectedAnswer,
          totalScore,
          setScore,
          setQuestion,
          resetAnswer,
          setVerdict,
          outcomes,
          resetQuestion
        )
      }
    >
      <div className={classes.buttonTextContainer}>
        <div className={classes.buttonText}>Next</div>
        <div className={classes.buttonArrow}>&#8250;</div>
      </div>
    </button>
  );
};

NextButton.propTypes = {
  selectedAnswer: PropTypes.shape(),
  next: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  totalScore: PropTypes.number.isRequired,
  outcomes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setScore: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
  verdict: PropTypes.shape(),
  setVerdict: PropTypes.func.isRequired,
  resetQuestion: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired
};

NextButton.defaultProps = {
  selectedAnswer: null,
  verdict: null
};

export default NextButton;
