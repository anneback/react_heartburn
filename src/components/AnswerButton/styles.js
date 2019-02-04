export default {
  '@import': 'url("https://fonts.googleapis.com/css?family=Montserrat")',
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    height: 40,
    width: 120,
    borderRadius: 100,
    color: '#0e2c38',
    border: '1px solid #CFCFD5',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: '#6accba',
      color: '#fff'
    }
  }
};
