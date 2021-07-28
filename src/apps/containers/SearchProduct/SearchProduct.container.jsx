import { useState } from "react";
import { object, func } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  TextField,
  InputAdornment,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Fab,
  Badge,
  Divider,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Search, ShoppingCart, Close } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Card, Spinner } from "apps/components/ui";
import useSearchProductHook from "hooks/useSearchProduct.hook";
import { selectCart, clearCart } from "redux/reducers/cartSelected.reducer";
import { rupiahFormat } from "helpers/formattor.helper";

import styles from "./style";

const SearchProductContainer = (props) => {
  const { classes, t } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { goodList, isLoading, setKeyword } = useSearchProductHook();
  const { items, total } = useSelector((state) => state.cartSelected);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const addCartAction = (items) => {
    dispatch(selectCart({ items }));
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapperHeader}>
        <Container>
          <h2>{t("greeting")}</h2>
          <h4>{t("subGreeting")}</h4>
          <TextField
            onChange={(event) => setKeyword(event.target.value)}
            size="medium"
            variant="outlined"
            className={classes.search}
            placeholder={t("searchPlaceholder")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="white" />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </div>
      <Container className={classes.listProduct}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            {isLoading ? (
              <Spinner label={t("common:loading")} />
            ) : (
              <Grid container justifyContent="center" spacing={2}>
                {goodList?.data?.map((item) => (
                  <Grid key={item.masterGoodsId} item>
                    <Card
                      t={t}
                      image={item.image}
                      title={item.name}
                      price={item.price}
                      currency={item.currency}
                      category={item.category}
                      openModal={handleOpenModal}
                      addCartAction={addCartAction}
                      selectedItems={items}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
      <Badge
        className={classes.badge}
        badgeContent={items.length > 0 ? items.length : null}
        color="secondary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Fab
          aria-label="test"
          onClick={() => items.length > 0 && handleOpenModal()}
          className={classes.fab}
        >
          <ShoppingCart />
        </Fab>
      </Badge>
      <Dialog
        fullScreen
        open={open}
        aria-labelledby="form-dialog-title"
        onClose={handleCloseModal}
      >
        <DialogTitle disableTypography>
          <Typography variant="h6">
            {t("search_product:modalTotalSummaryTitle")}
          </Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleCloseModal}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <p>{t("search_product:modalTotalSummaryInfo")}</p>
          <List>
            {items.map((item) => (
              <>
                <ListItem>
                  <ListItemAvatar className={classes.listModalImage}>
                    <img src={item.image} alt={item.name} />
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.listModalText}
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
                {t("search_product:modalTotalBuy")}
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
          <Button onClick={handleCloseModal} color="primary">
            {t("common:pay")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

SearchProductContainer.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
  classes: object.isRequired,
};

export default withStyles(styles)(SearchProductContainer);
