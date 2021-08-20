import { func, object } from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './style';

const CheckBalancedContainer = () => {
  return <Grid>Check Balanced</Grid>;
};

CheckBalancedContainer.propTypes = {
  t: func.isRequired,
  classes: object.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(CheckBalancedContainer);
