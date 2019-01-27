import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as ducks from '../ducks';

import './style.css';
import NextButton from './NextButton';
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      selectedAnswerId: null,
    };
  }

  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id;
  }

  render() {
    const {
      id,
      question_text,
      answers,
      next,
      questions,
      totalScore,
      setScore,
      setQuestion,
    } = this.props;
    return (
      <div>
        <div>{question_text}</div>
        <div>
          {answers[0].label}
          <input
            type="radio"
            name="answer"
            onClick={() =>
              this.setState({
                selectedAnswerId: answers[0].id,
                score: answers[0].score,
              })
            }
          />
          {answers[1].label}
          <input
            type="radio"
            name="answer"
            onClick={() =>
              this.setState({
                selectedAnswerId: answers[1].id,
                score: answers[1].score,
              })
            }
          />
        </div>

        <NextButton
          selectedAnswerId={this.state.selectedAnswerId}
          next={next}
          totalScore={totalScore}
          score={this.state.score}
          questions={questions}
          setScore={setScore}
          setQuestion={setQuestion}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setScore: ducks.actions.setScore,
  setQuestion: ducks.actions.setQuestion,
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  question_text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape()),
  next: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  outcomes: PropTypes.arrayOf(PropTypes.shape()),
};

Question.defaultProps = {
  answers: [],
  outcomes: [],
};

export default connect(
  null,
  mapDispatchToProps,
)(Question);
