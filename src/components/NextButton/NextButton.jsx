import React from "react";
import PropTypes from "prop-types";

const isNextOutcome = nextList =>
  nextList.some(next => Object.keys(next).some(key => key === "outcome"));

const getQuestionFromList = (questions, nextQuestionId) => {
  return questions.find(question => {
    return question.id === nextQuestionId;
  });
};

const getOutcomeFromList = (outcomes, outcomeId) =>
  outcomes.find(outcome => {
    return outcome.id === outcomeId;
  });

const nextOnClick = (
  questions,
  nextList,
  selectedAnswer,
  totalScore,
  outcomesList,
  setScore,
  setQuestion,
  resetAnswer,
  setVerdict
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
    const multiQuestion = nextList.find(
      next => next.answered === selectedAnswerId
    );

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
  selectedAnswer,
  next,
  totalScore,
  outcomes,
  questions,
  resetAnswer,
  setScore,
  setQuestion,
  setVerdict,
  classes
}) => (
  <button
    className={classes.button}
    type="button"
    disabled={selectedAnswer == null}
    onClick={() =>
      nextOnClick(
        questions,
        next,
        selectedAnswer,
        totalScore,
        outcomes,
        setScore,
        setQuestion,
        resetAnswer,
        setVerdict
      )
    }
  >
    <div className={classes.buttonTextContainer}>
      <div className={classes.buttonText}>Next</div>
      <div className={classes.buttonArrow}>&#8250;</div>
    </div>
  </button>
);

NextButton.propTypes = {
  selectedAnswer: PropTypes.shape(),
  next: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  totalScore: PropTypes.number.isRequired,
  outcomes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  resetAnswer: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
  setVerdict: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired
};

NextButton.defaultProps = {
  selectedAnswer: null
};

export default NextButton;
