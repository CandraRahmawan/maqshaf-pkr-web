const styles = (theme) => ({
  root: {
    backgroundColor: theme.primaryColor,
    height: '100vh',
  },
  wrapper: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.color.white,
    textAlign: 'center',
    '& h1': {
      fontSize: 98,
      marginBottom: 12,
      marginTop: 24,
      borderBottom: '1px solid #fff'
    },
    '& h3': {
      fontSize: 30,
      marginTop: 8
    },
    '& svg': {
      fontSize: 98
    }
  },
});

export default styles;
