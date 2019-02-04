const styles = {
  '@import': 'url("https://fonts.googleapis.com/css?family=Montserrat")',
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 520,
    width: 300,
    padding: [0, 20, 0, 20],
    '&:lastChild': {
      alignSelf: 'flex-end'
    }
  },
  line: { width: '40px', borderBottom: '3px solid #CFCFD5', margin: [10, 0] },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    color: '#0E2C38',
    fontSize: 28,
    padding: [10, 0]
  },
  text: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#0E2C38',
    paddingTop: 5,
    paddingBottom: 20
  },
  bookingButton: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#6accba',
    color: '#ffffff',
    border: '1px solid #CFCFD5',
    cursor: 'pointer'
  },
  bookingButtonText: {
    display: 'flex',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    alignItems: 'center',
    justifyContent: 'center',
    pointer: 'cursor'
  },
  backToStartLink: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Montserrat, sans-serif',
    color: '#CFCFD5',
    textDecoration: 'underline #CFCFD5',
    cursor: 'pointer',
    marginTop: 'auto',
    padding: 20
  }
};

export default styles;
