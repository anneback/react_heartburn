import React from 'react';
import PropTypes from 'prop-types';

const isNextOutcome = nextList => nextList.some(next => next.key === 'outcome');

const getOutcomesWithScore = nextList => nextList.filter(next => next.key === 'max_score');

const getNextQuestion = (nextList, answerId, totalScore) => {
  let nextQuestion = {};
  if (nextList.length > 1 && !isNextOutcome(nextList)) {
    // Has multiple choices, like the first question in the list
    nextQuestion = nextList.filter(next => next.answered === answerId);
  } else if (isNextOutcome(nextList)) {
    // Next step is an outcome
    const outcomeMaxScore = getOutcomesWithScore(nextList);
    if (totalScore <= outcomeMaxScore[0].max_score) {
      nextQuestion = outcomeMaxScore[0].outcome;
    } else if (totalScore <= outcomeMaxScore[1].max_score) {
      nextQuestion = outcomeMaxScore[1].outcome;
    } else {
      nextQuestion = nextList[2].outcome;
    }
  } else {
    // other questions
    nextQuestion = nextList[0].next_question;
  }
  return nextQuestion;
};

const nextOnClick = (
  nextList,
  selectedAnswerId,
  totalScore,
  score,
  questions,
  setScore,
  setQuestion,
) => {
  console.log(selectedAnswerId);
  const nextQuestionId = getNextQuestion(nextList, selectedAnswerId);
  const nextQuestion = questions.filter(question => question.id === nextQuestionId);
  console.log({ nextQuestion });
  setScore(totalScore + score);
  setQuestion(nextQuestion);
};
class NextButton extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.selectedAnswerId !== nextProps.selectedAnswerId;
  }
  render() {
    const {
      selectedAnswerId,
      next,
      totalScore,
      score,
      questions,
      setScore,
      setQuestion,
    } = this.props;
    return (
      <button
        type="button"
        disabled={selectedAnswerId === null}
        onClick={() =>
          nextOnClick(next, selectedAnswerId, totalScore, score, questions, setScore, setQuestion)
        }
      >
        Next
      </button>
    );
  }
}

NextButton.propTypes = {
  selectedAnswerId: PropTypes.string,
  next: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  totalScore: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setScore: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
};

NextButton.defaultProps = {
  selectedAnswerId: null,
};

export default NextButton;
