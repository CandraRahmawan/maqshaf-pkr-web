import { useState } from 'react';
import {
  Button,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  CircularProgress,
} from '@material-ui/core';
import { AccountBox, AccountBalanceWallet } from '@material-ui/icons';
import {get, isEmpty} from 'lodash';
import QrReader from 'react-qr-reader';
import { array, func, number, object } from 'prop-types';
import { useDispatch } from 'react-redux';
import { clearCart } from 'redux/reducers/cartSelected.reducer';
import useGetUserByQrCodeHook from 'hooks/Shop/useGetUserByQrCode.hook';
import { Spinner, Alert } from 'apps/components/ui';
import { rupiahFormat } from 'helpers/formattor.helper';
import useTransactionDebitHook from 'hooks/Shop/useTransactionDebit.hook';

import useStyles from './useStyle';

const IdentityDataDialogComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t, handleCloseModal, history, items, qty, total } = props;
  const [resultCode, setResultCode] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const { user, errorUser, isLoading } = useGetUserByQrCodeHook(resultCode, setShowAlert);
  const getUser = get(user, 'data', {});

  const { isLoadingMutationBuy, mutateBuy, errorMutationBuy } = useTransactionDebitHook(
    history,
    setShowAlert,
    t
  );

  const handleScan = (data) => {
    if (data) {
      setResultCode(data);
    }
  };

  const handleError = () => {
    setShowAlert(true);
  };

  return (
    <>
      <DialogContent>
        {!user && (
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
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
