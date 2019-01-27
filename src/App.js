import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from './api/response.json';

import Question from './components/Question';
import * as ducks from './ducks';
import './App.css';

class App extends Component {
  componentDidMount() {
    var response = this.props.getData(api);
    this.props.setQuestion(response.payload.questions[0]);
    this.props.setInitDone();
  }

  render() {
    const { score, currentQuestion, initDone, questions, setScore, setQuestion } = this.props;
    if (!initDone) {
      return <>loading</>;
    } else {
      return (
        <div className="App">
          <div>SCORE: {score}</div>
          <header className="App-header">
            <Question
              {...currentQuestion}
              questions={questions}
              totalScore={score}
              setScore={setScore}
              setQuestion={setQuestion}
            />
          </header>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    questions: ducks.selectors.questions(state),
    outcomes: ducks.selectors.outcomes(state),
    score: ducks.selectors.score(state),
    currentQuestion: ducks.selectors.currentQuestion(state),
    initDone: ducks.selectors.initDone(state),
  };
};

const mapDispatchToProps = {
  getData: ducks.actions.getData,
  setScore: ducks.actions.setScore,
  setQuestion: ducks.actions.setQuestion,
  setInitDone: ducks.actions.setInitDone,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
