import { func, object } from 'prop-types';
import { TextField, Grid, Paper, Box, InputAdornment, Divider } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Alert, Button } from 'apps/components/ui';
import useSubmitLoginHook from 'hooks/Dashboard/useSubmitLogin.hook';

import styles from './style';

const LoginContainer = ({ classes, t, history }) => {
  const { error, isLoading, handleSubmit, showAlert, setShowAlert } = useSubmitLoginHook(history);
  return (
    <Grid className={classes.login_root} item xs={12} md={6} lg={4}>
      <Paper variant="outlined" className={classes.login_box}>
        <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
          <Box alignSelf="center">
            <h2>Login Administrator</h2>
          </Box>
        </Box>
        <Divider />
        <form onSubmit={handleSubmit} className={classes.form}>
          <Box display="flex" flexDirection="column">
            <TextField
              className={classes.margin}
              placeholder={t('dashboard_login:placeholderUsername')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="password"
              className={classes.margin}
              placeholder={t('dashboard_login:placeholderPassword')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" className={classes.button_login} isLoading={isLoading}>
              {t('dashboard_login:loginLabel')}
            </Button>
          </Box>
        </form>
      </Paper>
      <Alert.Floating
        severity="error"
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        text={error?.message}
      />
    </Grid>
  );
};

LoginContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(LoginContainer);
