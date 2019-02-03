import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import AnswerButton from './AnswerButton';
import ducks from '../../ducks';
import styles from './styles';

const mapDispatchToProps = {
  setAnswer: ducks.actions.setAnswer
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  injectSheet(styles)
)(AnswerButton);
