import injectSheet from 'react-jss';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import NextButton from './NextButton';
import ducks from '../../ducks';
import styles from './styles';

const mapDispatchToProps = {
  resetAnswer: ducks.actions.resetAnswer,
  resetQuestion: ducks.actions.resetQuestion,
  setScore: ducks.actions.setScore,
  setQuestion: ducks.actions.setQuestion,
  setVerdict: ducks.actions.setVerdict
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  injectSheet(styles)
)(NextButton);
