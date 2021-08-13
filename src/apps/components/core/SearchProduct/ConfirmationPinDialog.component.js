import { useState } from 'react';
import {
  Button,
  DialogContent,
  DialogActions,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Avatar,
  CircularProgress,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { func, object } from 'prop-types';
import { AccountBalanceWallet, AccountBox } from '@material-ui/icons';
import { rupiahFormat } from 'helpers/formattor.helper';
import { clearCart } from 'redux/reducers/cartSelected.reducer';
import useTransactionDebitHook from 'hooks/Shop/useTransactionDebit.hook';
import { Alert } from 'apps/components/ui';

import useStyles from './useStyle';

const ConfirmationPinDialogComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { total, saldo, transactionCode, userId, transactionId } = useSelector(
    (state) => state.transaction
  );
  const { t, handleCloseModal, history } = props;
  const [showAlert, setShowAlert] = useState(false);
  const [pin, setPin] = useState();

  const { mutateDebit, errorMutationDebit, isLoadingMutationDebit } = useTransactionDebitHook(
    history,
    setShowAlert,
    t
  );

  return (
    <>
      <DialogContent>
        <List>
          <ListItem key="user">
            <ListItemAvatar>
              <Avatar>
                <AccountBox />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t('common:label.transactionCode')} secondary={transactionCode} />
          </ListItem>
          <Divider />
          <ListItem key="saldo">
            <ListItemAvatar>
              <Avatar>
                <AccountBalanceWallet />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t('common:balance')} secondary={rupiahFormat(saldo)} />
          </ListItem>
          <Divider />
          <ListItem key="total">
            <ListItemAvatar>
              <Avatar>
                <AccountBalanceWallet />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t('common:label.totalBuy')} secondary={rupiahFormat(total)} />
          </ListItem>
          <Divider />
        </List>
        <TextField
          onChange={(event) => setPin(event.target.value)}
          label={t('common:label.enterPin')}
          type="password"
          className={classes.input_pin}
        />
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
          onClick={() =>
            mutateDebit({
              totalBayar: total,
              updatedBy: userId.toString(),
              userId,
              pin,
              transactionId,
            })
          }
          color="primary"
          disabled={isLoadingMutationDebit}
        >
          {t('common:confirmation')}
          {isLoadingMutationDebit && (
            <CircularProgress size={18} className={classes.button_progress} />
          )}
        </Button>
      </DialogActions>
      <Alert.Floating
        severity="error"
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        text={errorMutationDebit?.message || t('glossary:failedDebit')}
      />
    </>
  );
};

ConfirmationPinDialogComponent.propTypes = {
  t: func.isRequired,
  handleCloseModal: func.isRequired,
  history: object.isRequired,
};

export default ConfirmationPinDialogComponent;
