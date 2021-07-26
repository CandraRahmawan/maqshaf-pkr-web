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
  DialogContentText,
  Fab,
  Badge,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Search, ShoppingCart } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Card, Spinner } from "apps/components/ui";
import useSearchProductHook from "hooks/useSearchProduct.hook";
import { selectCart } from "redux/reducers/cartSelected.reducer";

import styles from "./style";

const SearchProductContainer = (props) => {
  const { classes, t } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { goodList, isLoading, setKeyword } = useSearchProductHook();
  const { items } = useSelector((state) => state.cartSelected);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const addCartAction = (items) => {
    dispatch(selectCart({ items: [items] }));
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
        <Fab aria-label="test" className={classes.fab}>
          <ShoppingCart />
        </Fab>
      </Badge>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseModal} color="primary">
            Subscribe
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
