import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,

    '& a': {
      color: theme.color.black,
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'none',
      },
    },
  },

  drawer_paper: {
    width: 240,
  },

  drawer_header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,

    justifyContent: 'flex-end',
  },

  menu_title_wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',

    '& h5': {
      marginLeft: 12,
      alignItems: 'center',
      alignSelf: 'center',
    },
  },
  active: {
    color: '#1a237e',
    backgroundColor: '#ecf0f1'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default useStyles;
