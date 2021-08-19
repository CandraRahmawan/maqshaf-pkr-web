import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  app_bar: {
    transition:
      theme.transitions.create(
        ['margin',
        'width'],
        {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingscreen,
        }
      ),
  },

  app_bar_shift: {
    width: `calc(100% - 240px)`,
    marginLeft: 240,
    transition:
      theme.transitions.create(
        ['margin',
        'width'],
        {
          easing: theme.transitions.easing.easeout,
          duration: theme.transitions.duration.enteringscreen,
        }
      ),
  },

  hide: {
    display: 'none',
  },

  menu_button: {
    marginRight: theme.spacing(2),
  },

  header_login_wrapper: {
    padding: '8px 0',
    backgroundColor: '#e3f2fd',
    borderBottom: `8px solid ${theme.primaryColor}`,

    '& img': {
      marginRight: 15,
      width: 50,
      height: 50,
      [theme.breakpoints.down('xs')]: {
        height: 35,
        width: 35,
      },
    },

    '& h2': {
      margin: 0,
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
      },
    },
  },
}));

export default useStyles;
