import React from 'react';
import { connect } from 'react-redux';
import api from './api/response.json';

import { Question, Verdict } from './components';
import ducks from './ducks';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { getData, setQuestion, setInitDone } = this.props;
    const response = getData(api).payload;
    setQuestion(response.questions[0]);
    setInitDone();
  }

  render() {
    const { score, initDone, verdict } = this.props;
    let displayed;
    if (!initDone) {
      displayed = <>Loading...</>;
    } else if (verdict !== null) {
      displayed = <Verdict verdict={verdict} />;
    } else {
      displayed = <Question {...this.props} />;
    }
    return (
      <div className='App'>
        <div>SCORE: {score}</div>
        <header className='App-header'>{displayed}</header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: ducks.selectors.getQuestions(state),
    outcomes: ducks.selectors.getOutcomes(state),
    score: ducks.selectors.getScore(state),
    currentQuestion: ducks.selectors.getCurrentQuestion(state),
    initDone: ducks.selectors.getInitDone(state),
    selectedAnswer: ducks.selectors.getSelectedAnswer(state),
    verdict: ducks.selectors.getVerdict(state)
  };
};

const mapDispatchToProps = {
  getData: ducks.actions.getData,
  setScore: ducks.actions.setScore,
  setQuestion: ducks.actions.setQuestion,
  setInitDone: ducks.actions.setInitDone,
  setAnswer: ducks.actions.setAnswer,
  resetAnswer: ducks.actions.resetAnswer,
  setVerdict: ducks.actions.setVerdict,
  resetVerdict: ducks.actions.resetVerdict,
  resetQuestion: ducks.actions.resetQuestion
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
