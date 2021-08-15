import { func, object } from 'prop-types';
import { TextField, Grid, Paper, Box, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import styles from './style';

const LoginContainer = ({ classes }) => {
  return (
    <Grid className={classes.login_root} item xs={12} md={6} lg={4}>
      <Paper variant="outlined" className={classes.login_box}>
        <Box display="flex" flexDirection="column">
          <TextField
            className={classes.margin}
            placeholder="Username"
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
            placeholder="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
          <Button className={classes.button_login} variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Paper>
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
