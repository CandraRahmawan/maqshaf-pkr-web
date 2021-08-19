import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: '2px solid #1a237e',
    marginTop: 30,
    textAlign: 'center',
    position: 'relative',
  },

  bottom: {
    backgroundColor: '#1a237e',

    '& h4': {
      marginTop: 0,
      marginBottom: 0,
      padding: '16px 0',
      color: theme.color.white,
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
        padding: '12px 0',
      },
    },
  },
}));

export default useStyles;
