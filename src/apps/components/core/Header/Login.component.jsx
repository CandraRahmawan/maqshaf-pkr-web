import { func } from 'prop-types';
import { Box } from '@material-ui/core';

import useStyles from './style';

const LoginComponent = ({ t }) => {
  const classes = useStyles();
  return (
    <header className={classes.header_login_wrapper}>
      <Box display="flex" justifyContent="center">
        <div>
          <img src="/assets/logo192.png" />
        </div>
        <Box alignSelf="center">
          <h2>{t('glossary:companyName')}</h2>
        </Box>
      </Box>
    </header>
  );
};

LoginComponent.propTypes = {
  t: func.isRequired,
};

export default LoginComponent;
