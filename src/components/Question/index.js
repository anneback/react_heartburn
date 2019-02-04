import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import ducks from '../../ducks';

import Question from './Question';
import styles from './styles.js';

const mapStateToProps = state => ({
  questions: ducks.selectors.getQuestions(state),
  outcomes: ducks.selectors.getOutcomes(state),
  score: ducks.selectors.getScore(state),
  currentQuestion: ducks.selectors.getCurrentQuestion(state),
  selectedAnswer: ducks.selectors.getSelectedAnswer(state),
  refresh: ducks.selectors.getRefresh(state)
});

const mapDispatchToProps = {
  getData: ducks.actions.getData,
  setScore: ducks.actions.setScore,
  setAnswer: ducks.actions.setAnswer,
  resetAnswer: ducks.actions.resetAnswer,
  setVerdict: ducks.actions.setVerdict,
  resetQuestion: ducks.actions.resetQuestion,
  resetAll: ducks.actions.resetAll
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectSheet(styles)
)(Question);
