import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { bool, func } from 'prop-types';

const FloatingComponent = (props) => {
  const { showAlert, setShowAlert, text, severity } = props;
  return (
    <Snackbar open={showAlert} autoHideDuration={2000} onClose={() => setShowAlert(false)}>
      <Alert severity={severity} variant="filled">
        {text}
      </Alert>
    </Snackbar>
  );
};

FloatingComponent.defaultProps = {
  severity: 'success',
};

FloatingComponent.propTypes = {
  setShowAlert: func.isRequired,
  showAlert: bool.isRequired,
};

export default FloatingComponent;
