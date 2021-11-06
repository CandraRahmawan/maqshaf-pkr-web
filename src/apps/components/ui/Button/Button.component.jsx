import { string, bool, func } from 'prop-types';
import { Button, CircularProgress } from '@material-ui/core';

import { useStyles } from './style';

const ButtonComponent = (props) => {
  const { className, isLoading, children, variant, color, type, onClick } = props;
  const classes = useStyles();
  return (
    <Button type={type} onClick={onClick} className={className} variant={variant} color={color} disabled={isLoading}>
      {isLoading && <CircularProgress size={18} className={classes.button_progress} />}
      {children}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  variant: 'contained',
  color: 'primary',
  type: 'button',
  onClick: null,
};

ButtonComponent.propTypes = {
  isLoading: bool,
  className: string,
  variant: string,
  color: string,
  type: string,
  onClick: func
};

export default ButtonComponent;
