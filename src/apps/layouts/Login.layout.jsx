import { useEffect } from 'react';
import { element, func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Footer, Header } from 'apps/components/core';
import { getUser } from 'helpers/auth.helper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& main': {
      padding: theme.spacing(3),
    },
  },
}));

const LoginLayout = ({ children, t, history }) => {
  const classes = useStyles();
  useEffect(() => {
    if (getUser()) {
      history.replace('/dashboard');
    }
  }, []);
  return (
    <div className={classes.root}>
      <Header.Login t={t} />
      <main>{children}</main>
      <Footer t={t} />
    </div>
  );
};

LoginLayout.propTypes = {
  children: element.isRequired,
  t: func.isRequired,
};

export default LoginLayout;
