import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Verdict = ({ verdict }) => (
  <div>
    {verdict.text}
    {verdict.show_booking_button && (
      <button type='button' onClick={() => alert('Meeting booked')}>
        Book a meeting
      </button>
    )}
    <button type='button' onClick={() => console.log('reset all')}>
      Back to start screen
    </button>
  </div>
);

Verdict.propTypes = {
  verdict: PropTypes.shape().isRequired
};

export default Verdict;
