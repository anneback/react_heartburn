import React from 'react';
import PropTypes from 'prop-types';

import api from './api/response.json';

import { Question, Verdict } from './components';

class App extends React.Component {
  init() {
    const { getData, setQuestion, setInitDone } = this.props;
    const response = getData(api).payload;
    setQuestion(response.questions[0]);
    setInitDone();
  }

  componentDidMount() {
    this.init();
  }

  componentWillReceiveProps(nextProps) {
    const { refresh, resetAll } = this.props;
    if (nextProps.refresh !== refresh) {
      resetAll();
      this.init();
    }
  }

  render() {
    const { score, initDone, verdict, classes } = this.props;
    let displayed;
    if (!initDone) {
      displayed = <>Loading...</>;
    } else if (verdict !== null) {
      displayed = <Verdict verdict={verdict} />;
    } else {
      displayed = <Question {...this.props} />;
    }
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.title}>Heartburn Checker</div>
          <div>{displayed}</div>
          <div>SCORE: {score}</div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  score: PropTypes.number.isRequired,
  initDone: PropTypes.bool.isRequired,
  verdict: PropTypes.shape().isRequired,
  classes: PropTypes.shape().isRequired
};

export default App;
