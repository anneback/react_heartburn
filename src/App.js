import React, { Component } from 'react';
import { connect } from 'react-redux';

import Question from './components/Question';
import * as ducks from './ducks';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
    const { questions, setScore, score } = this.props;
    return (
      <div className="App">
        <div>SCORE: {score}</div>
        <header className="App-header">
          {questions.length > 0 && <Question {...questions[0]} setScore={setScore} />}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: ducks.selectors.questions(state),
    outcomes: ducks.selectors.outcomes(state),
    score: ducks.selectors.score(state),
  };
};

const mapDispatchToProps = {
  getData: ducks.actions.getData,
  setScore: ducks.actions.setScore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
