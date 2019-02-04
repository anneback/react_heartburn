export default {
  button: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#6accba',
    color: '#ffffff',
    border: '1px solid #CFCFD5',
    cursor: 'pointer',
    '&:disabled': {
      backgroundColor: '#CFCFD5'
    }
  },
  buttonText: {
    display: 'flex',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonArrow: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: 20
  },
  buttonTextContainer: {
    display: 'grid',
    gridTemplateColumns: '[start] 80% [mid] 20% [end]'
  }
};
