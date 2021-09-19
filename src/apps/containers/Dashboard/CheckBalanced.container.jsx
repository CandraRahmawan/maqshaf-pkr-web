import { Button, Dialog, DialogTitle, DialogContent, Box, DialogActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import useCheckBalancedHook from 'hooks/Dashboard/useCheckBalanced.hook';
import { func, object } from 'prop-types';
import QrReader from 'react-qr-reader';
import { rupiahFormat } from 'helpers/formattor.helper';
import styles from './style';

const CheckBalancedContainer = ({ t, classes }) => {
  const { data, showQRReader, setShowQRReader, showAlertBalance, setShowAlertBalance,
    handleScan, handleScanError } = useCheckBalancedHook();

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
        <Button variant="contained" color="primary" className={classes.button_tambah} onClick={() => setShowQRReader(true)}>
          {t('dashboard_check_balanced:button.scan')}
        </Button>
      </div>
    )}
    <Dialog onClose={() => setShowAlertBalance(false)} open={showAlertBalance}>
      <DialogTitle>{t('dashboard_check_balanced:balance')}</DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="space-around">
          <Box marginRight={4}>Total Saldo: </Box>
          <b>{data?.data?.deposit?.saldo && rupiahFormat(data?.data?.deposit?.saldo)}</b>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setShowAlertBalance(false)}>
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
