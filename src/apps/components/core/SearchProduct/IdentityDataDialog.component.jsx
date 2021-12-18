import {
  Avatar, Box, Button, CircularProgress, DialogActions, DialogContent, IconButton, InputAdornment, List,
  ListItem,
  ListItemAvatar, ListItemText, TextField
} from '@material-ui/core';
import { useFormik } from 'formik';
import { CropFreeOutlined } from '@material-ui/icons';
import { AccountBalanceWallet, AccountBox } from '@material-ui/icons';
import { Alert, Spinner } from 'apps/components/ui';
import { rupiahFormat } from 'helpers/formattor.helper';
import useGetUserByQrCodeHook from 'hooks/Shop/useGetUserByQrCode.hook';
import useTransactionDebitHook from 'hooks/Shop/useTransactionDebit.hook';
import { get, isEmpty } from 'lodash';
import { array, func, number, object } from 'prop-types';
import { useState } from 'react';
import QrReader from 'react-qr-reader';
import { useDispatch } from 'react-redux';
import { clearCart } from 'redux/reducers/cartSelected.reducer';
import useStyles from './useStyle';


const IdentityDataDialogComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t, handleCloseModal, history, items, qty, total } = props;
  const [resultCode, setResultCode] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [showQr, setShowQr] = useState(false)

  const { user, errorUser, isLoading } = useGetUserByQrCodeHook(resultCode, setShowAlert);
  const getUser = get(user, 'data', {});

  const formik = useFormik({
    initialValues: {
      pin: '',
      confirmPin: '',
      oldPin: '',
    },
    onSubmit: (values) => { },
  });

  const { isLoadingMutationBuy, mutateBuy, errorMutationBuy } = useTransactionDebitHook(
    history,
    setShowAlert,
    t
  );

  const handleScanData = (data) => {
    if (data) {
      setResultCode(data);
      setShowQr(false)
    }
  };

  const handleError = () => {
    setShowAlert(true);
  };

  return (
    <>
      <DialogContent>
        {
          showQr && (
            <>
            <Button variant="contained"  color="secondary" className={classes.button_tambah} style={{ width: 200, marginBottom: 10 }} onClick={() => {
              setTimeout(() => {
                setShowQr(false)
              }, 1)
            }}>
              {t('search_product:button.cancel')}
            </Button>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScanData}
              style={{ width: '100%' }}
            />
            </>
          )
        }
        {!user && (
          <Box display="flex" marginBottom={1} marginTop={1}>
            <TextField
              id="nis"
              label={t('search_product:form.nis')}
              name="nis"
              value={formik.values.nis}
              error={Boolean(formik.errors.nis)}
              onChange={formik.handleChange}
              onBlur={() => setResultCode(formik.values.nis)}
              helperText={formik.errors.nis}
              style={{ margin: 8 }}
              placeholder={t('search_product:placeholder.nis')}
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowQr(true)}
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

        )}
        {isLoading ? (
          <Spinner label={t('common:loading')} />
        ) : (
          !errorUser && !isEmpty(getUser) && (
            <List>
              <ListItem key="user">
                <ListItemAvatar>
                  <Avatar>
                    <AccountBox />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={getUser?.user?.nis}
                  secondary={`${getUser?.user?.fullName} - ${getUser?.user?.class}`}
                />
              </ListItem>
              <ListItem key="saldo">
                <ListItemAvatar>
                  <Avatar>
                    <AccountBalanceWallet />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={t('common:balance')}
                  secondary={rupiahFormat(getUser?.deposit?.saldo)}
                />
              </ListItem>
            </List>
          )
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            dispatch(clearCart());
            handleCloseModal();
          }}
          color="primary"
        >
          {t('common:cancel')}
        </Button>
        <Button
          onClick={() => {
            mutateBuy({
              userId: getUser?.user?.userId,
              total,
              qty,
              items,
            });
          }}
          color="primary"
          disabled={isLoadingMutationBuy}
        >
          {t('common:pay')}
          {isLoadingMutationBuy && (
            <CircularProgress size={18} className={classes.button_progress} />
          )}
        </Button>
      </DialogActions>
      <Alert.Floating
        severity="error"
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        text={errorUser?.message || errorMutationBuy?.message || t('glossary:notFoundUser')}
      />
    </>
      );
};

      IdentityDataDialogComponent.propTypes = {
        t: func.isRequired,
      handleCloseModal: func.isRequired,
      history: object.isRequired,
      items: array.isRequired,
      qty: number.isRequired,
      total: number.isRequired,
};

      export default IdentityDataDialogComponent;
