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
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { func, array, object, number } from "prop-types";
import { rupiahFormat } from "helpers/formattor.helper";
import { clearCart } from "redux/reducers/cartSelected.reducer";

import useStyles from "./useStyle";

const SummaryDialogComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t, handleCloseModal, items, history, total } = props;
  return (
    <>
      <DialogContent>
        <p>{t("search_product:dialogTotalSummaryInfo")}</p>
        <List>
          {items.map((item, index) => (
            <>
              <ListItem key={index}>
                <ListItemAvatar className={classes.list_modal_image}>
                  <img src={item.image} alt={item.name} />
                </ListItemAvatar>
                <ListItemText
                  className={classes.list_modal_text}
                  primary={item.name}
                  secondary={rupiahFormat(item.price, item.currency)}
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
        <Box display="flex" justifyContent="space-between">
          <div>
            <Typography variant="subtitle1" color="disabled">
              {t("search_product:dialogTotalBuy")}
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1">{rupiahFormat(total)}</Typography>
          </div>
        </Box>
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
          {t("common:next")}
        </Button>
      </DialogActions>
    </>
  );
};

SummaryDialogComponent.propTypes = {
  t: func.isRequired,
  handleCloseModal: func.isRequired,
  items: array.isRequired,
  history: object.isRequired,
  total: number.isRequired,
};

export default SummaryDialogComponent;
