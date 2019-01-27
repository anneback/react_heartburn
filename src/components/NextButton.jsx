import React from 'react';
import PropTypes from 'prop-types';

class NextButton extends React.Component {
  render() {
    return <button onClick={() => console.log('NEXT')} />;
  }
}
