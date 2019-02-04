import React from 'react';
import PropTypes from 'prop-types';

const Verdict = ({ verdict, setRefresh, classes }) => (
  <div className={classes.root}>
    <div className={classes.textContainer}>
      <div className={classes.title}>
        Thank you for answering the questions!
      </div>
      <div className={classes.line} />
    </div>
    <div className={classes.text}>{verdict.text}</div>
    {verdict.show_booking_button && (
      <button
        className={classes.bookingButton}
        type='button'
        onClick={() => alert('Meeting booked')}
      >
        <div className={classes.bookingButtonText}>Book a meeting</div>
      </button>
    )}
    <div className={classes.backToStartLink} onClick={() => setRefresh()}>
      Back to start screen
    </div>
  </div>
);

Verdict.propTypes = {
  verdict: PropTypes.shape().isRequired,
  setRefresh: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired
};

export default Verdict;
