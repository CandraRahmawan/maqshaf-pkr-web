import { Button, Dialog, DialogTitle, DialogContent, Box, DialogActions, TextField, InputAdornment, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import useCheckBalancedHook from 'hooks/Dashboard/useCheckBalanced.hook';
import { func, object } from 'prop-types';
import { CropFreeOutlined } from '@material-ui/icons';
import QrReader from 'react-qr-reader';
import { rupiahFormat } from 'helpers/formattor.helper';
import styles from './style';

const CheckBalancedContainer = ({ t, classes }) => {
  const { data, formik, showQRReader, setShowQRReader, showAlertBalance, handleCloseModal,
    handleScan, handleScanError, handleBlurNIS } = useCheckBalancedHook();

  return <div>
    {showQRReader ? (
      <>
        <Button variant="contained" color="secondary" onClick={() => setShowQRReader(false)}>
          {t('dashboard_check_balanced:button.cancel')}
        </Button>
        <QrReader
          delay={300}
          onError={handleScanError}
          onScan={handleScan}
          style={{ width: '100%', marginTop: 20 }}
        />
      </>
    ) : (
      <div>
        <Box display="flex" marginBottom={1} marginTop={1}>
          <TextField
            id="nis"
            label={t('dashboard_check_balanced:form.nis')}
            name="nis"
            value={formik.values.nis}
            error={Boolean(formik.errors.nis)}
            onChange={formik.handleChange}
            onBlur={handleBlurNIS}
            helperText={formik.errors.nis}
            style={{ margin: 8 }}
            placeholder={t('dashboard_check_balanced:placeholder.nis')}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowQRReader(true)}
                  >
                    <CropFreeOutlined />
                  </IconButton>
                </InputAdornment>
              )
            }}
            InputLabelProps={{
              shrink: true,

            }}
          />
        </Box>
      </div>
    )}
    <Dialog onClose={handleCloseModal} open={showAlertBalance}>
      <DialogTitle>{t('dashboard_check_balanced:balance')}</DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="space-around">
          <Box marginRight={4}>Total Saldo: </Box>
          <b>{data?.data?.deposit?.saldo && rupiahFormat(data?.data?.deposit?.saldo)}</b>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCloseModal}>
          {t('dashboard_check_balanced:button.close')}
        </Button>
      </DialogActions>
    </Dialog>
  </div>
};

CheckBalancedContainer.propTypes = {
  t: func.isRequired,
  classes: object.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(CheckBalancedContainer);
