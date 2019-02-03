import React from 'react';
import PropTypes from 'prop-types';

const Verdict = ({ verdict, classes }) => (
  <>
    <div className={classes.text}>{verdict.text}</div>
    {verdict.show_booking_button && (
      <button
        className={classes.bookingButton}
        type='button'
        onClick={() => alert('Meeting booked')}
      >
        Book a meeting
      </button>
    )}
    <button type='button' onClick={() => console.log('reset all')}>
      Back to start screen
    </button>
  </>
);

Verdict.propTypes = {
  verdict: PropTypes.shape().isRequired
};

export default Verdict;
