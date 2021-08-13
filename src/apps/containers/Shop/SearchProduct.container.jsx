import { useState } from 'react';
import { object, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import {
  TextField,
  InputAdornment,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  Fab,
  Badge,
  IconButton,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Search, ShoppingCart, Close } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { Card, Spinner } from 'apps/components/ui';
import { SearchProduct } from 'apps/components/core';
import useSearchProductHook from 'hooks/Shop/useSearchProduct.hook';
import { selectCart } from 'redux/reducers/cartSelected.reducer';

import styles from './style';

const SearchProductContainer = (props) => {
  const { classes, t, history } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { goodList, isLoading, setKeyword } = useSearchProductHook();
  const { items, total, qty } = useSelector((state) => state.cartSelected);
  const { action } = useParams();
  const isIdentityAction = action === 'identitas';
  const isEnterPinAction = action === 'pin';

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    history.replace('/');
    setOpen(false);
  };

  const addCartAction = (items) => {
    dispatch(selectCart({ items }));
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapperHeader}>
        <Container>
          <h2>{t('greeting')}</h2>
          <h4>{t('subGreeting')}</h4>
          <TextField
            onChange={(event) => setKeyword(event.target.value)}
            size="medium"
            variant="outlined"
            className={classes.search}
            placeholder={t('searchPlaceholder')}
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
              <Spinner label={t('common:loading')} />
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
          vertical: 'top',
          horizontal: 'right',
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
      <Dialog fullScreen open={open} aria-labelledby="form-dialog-title" onClose={handleCloseModal}>
        <DialogTitle disableTypography>
          <Typography variant="h6">
            {isIdentityAction
              ? t('search_product:dialogIdentityDataTitle')
              : isEnterPinAction
              ? t('search_product:dialogConfirmationPin')
              : t('search_product:dialogTotalSummaryTitle')}
          </Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseModal}>
            <Close />
          </IconButton>
        </DialogTitle>
        {isIdentityAction ? (
          <SearchProduct.IdentityDataDialog
            t={t}
            handleCloseModal={handleCloseModal}
            history={history}
            items={items}
            total={total}
            qty={qty}
          />
        ) : isEnterPinAction ? (
          <SearchProduct.ConfirmationPinDialog
            t={t}
            handleCloseModal={handleCloseModal}
            history={history}
          />
        ) : (
          <SearchProduct.SummaryDialog
            t={t}
            handleCloseModal={handleCloseModal}
            items={items}
            history={history}
            total={total}
          />
        )}
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
