import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class AnswerButton extends React.Component {
  onClickHandler = (setAnswer, answer) => {
    setAnswer(answer);
  };

  render() {
    const { setAnswer, answer, selectedAnswer, classes } = this.props;
    return (
      <div
        name={answer.label}
        className={cn(classes.button, {
          active: selectedAnswer !== null && selectedAnswer.id === answer.id
        })}
        onClick={() => this.onClickHandler(setAnswer, answer)}
      >
        {answer.label}
      </div>
    );
  }
}

AnswerButton.propTypes = {
  setAnswer: PropTypes.func.isRequired,
  answer: PropTypes.shape().isRequired,
  selectedAnswer: PropTypes.shape(),
  classes: PropTypes.shape().isRequired
};

AnswerButton.defaultProps = {
  selectedAnswer: null
};

export default AnswerButton;
