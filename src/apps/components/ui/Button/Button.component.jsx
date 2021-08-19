import { string, bool } from 'prop-types';
import { Button, CircularProgress } from '@material-ui/core';

import { useStyles } from './style';

const ButtonComponent = (props) => {
  const { className, isLoading, children, variant, color, type } = props;
  const classes = useStyles();
  return (
    <Button type={type} className={className} variant={variant} color={color} disabled={isLoading}>
      {isLoading && <CircularProgress size={18} className={classes.button_progress} />}
      {children}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  variant: 'contained',
  color: 'primary',
  type: 'button',
};

ButtonComponent.propTypes = {
  isLoading: bool,
  className: string,
  variant: string,
  color: string,
  type: string,
};

export default ButtonComponent;
