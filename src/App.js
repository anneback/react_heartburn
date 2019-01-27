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
    const { questions } = this.props;
    console.log('getQuestions', questions);
    return (
      <div className="App">
        <header className="App-header">
          {questions.length > 0 && <Question {...questions[0]} />}
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
