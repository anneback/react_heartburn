import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Verdict from './Verdict';
import ducks from '../../ducks';
import styles from './styles';

const mapDispatchToProps = {
  setRefresh: ducks.actions.setRefresh
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  injectSheet(styles)
)(Verdict);
