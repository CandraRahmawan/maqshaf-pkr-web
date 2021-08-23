import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import { func, bool, string } from 'prop-types';

const DialogComponent = (props) => {
  const { open, handleClose, handleOk, title, content, t } = props;
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          {t('common:label.cancel')}
        </Button>
        <Button onClick={handleOk} color="primary">
          {t('common:label.ok')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogComponent.propTypes = {
  t: func.isRequired,
  open: bool.isRequired,
  handleClose: func.isRequired,
  handleOk: func.isRequired,
  title: string.isRequired,
  content: string.isRequired,
};

export default DialogComponent;
