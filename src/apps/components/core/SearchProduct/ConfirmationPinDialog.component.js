import {
  Box,
  Button,
  DialogContent,
  DialogActions,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  TextField,
  Avatar,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { func, array, object, number } from "prop-types";
import { rupiahFormat } from "helpers/formattor.helper";
import { clearCart } from "redux/reducers/cartSelected.reducer";

import useStyles from "./useStyle";
import { AccountBalanceWallet, AccountBox } from "@material-ui/icons";

const ConfirmationPinDialogComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t, handleCloseModal, items, history, total } = props;
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
            <ListItemText
              primary={t("common:label.transactionCode")}
              secondary={"123123"}
            />
          </ListItem>
          <ListItem key="saldo">
            <ListItemAvatar>
              <Avatar>
                <AccountBalanceWallet />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t("common:balance")} secondary={"45555"} />
          </ListItem>
          <ListItem key="total">
            <ListItemAvatar>
              <Avatar>
                <AccountBalanceWallet />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={t("common:label.totalBuy")}
              secondary={"2000"}
            />
          </ListItem>
        </List>
        <TextField
          label={t("common:label.enterPin")}
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
          {t("common:cancel")}
        </Button>
        <Button onClick={() => history.push("/identitas")} color="primary">
          {t("common:confirmation")}
        </Button>
      </DialogActions>
    </>
  );
};

ConfirmationPinDialogComponent.propTypes = {
  t: func.isRequired,
  handleCloseModal: func.isRequired,
  items: array.isRequired,
  history: object.isRequired,
  total: number.isRequired,
};

export default ConfirmationPinDialogComponent;
