import { useState } from 'react';
import { object, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import {
  Box,
  TextField,
  InputAdornment,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import QrReader from 'react-qr-reader';
import { FooterNavigation } from 'apps/components/core';
import { useSelector } from 'react-redux';
import { Search, Close } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { Card, Spinner } from 'apps/components/ui';
import { SearchProduct } from 'apps/components/core';
import useSearchProductHook from 'hooks/Shop/useSearchProduct.hook';
import useCheckBalancedHook from 'hooks/Dashboard/useCheckBalanced.hook';
import { selectCart } from 'redux/reducers/cartSelected.reducer';
import { rupiahFormat } from 'helpers/formattor.helper';

import styles from './style';

const SearchProductContainer = (props) => {
  const { classes, t, history } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openScan, setOpenScan] = useState(false)
  const { goodList, isLoading, setKeyword } = useSearchProductHook();
  const { items, total, qty } = useSelector((state) => state.cartSelected);
  const { action } = useParams();
  const isIdentityAction = action === 'identitas';
  const isEnterPinAction = action === 'pin';

  const { data, showQRReader, setShowQRReader, showAlertBalance, handleCloseModal: handleCloseBalance,
    handleScan, handleScanError } = useCheckBalancedHook();


  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    history.replace('/');
    setOpen(false);
  };

  const handleOpenScan = () => {
    setOpenScan(true);
    setShowQRReader(true);
  }

  const handleCloseScan = () => {
    setOpenScan(false);
    setShowQRReader(false);
  }

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
      <FooterNavigation t={t} history={history} handleOpenModal={handleOpenModal} handleOpenScan={handleOpenScan} />
      {/* <Badge
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
      </Badge> */}
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
      <Dialog fullScreen open={openScan} aria-labelledby="form-dialog-title" onClose={handleCloseScan}>
        <DialogTitle disableTypography>
          {showQRReader ? (
            <Box marginTop={4}>
              <QrReader
                delay={300}
                onError={handleScanError}
                onScan={handleScan}
                style={{ width: '100%', marginTop: 20 }}
              />
            </Box>
          ) : (
            <Box marginTop={14} paddingLeft={2} paddingRight={2}>
              <Box display="flex" marginTop={4}>
                <Box width={"50%"}>{t('search_product:dialogNIS')}</Box>
                <Box width={"50%"} textAlign="right"><b>{data?.data?.user?.nis}</b></Box>
              </Box>
              <Box display="flex" marginTop={4}>
                <Box width={"50%"}>{t('search_product:dialogName')}</Box>
                <Box width={"50%"} textAlign="right"><b>{data?.data?.user?.fullName}</b></Box>
              </Box>
              <Box display="flex" marginTop={4} justifyContent="space-between">
                <Box width={"50%"}>{t('search_product:dialogAddress')}</Box>
                <Box width={"50%"} textAlign="right"><b>{data?.data?.user?.address}</b></Box>
              </Box>
              <Box display="flex" marginTop={4} justifyContent="space-between">
                <Box width={"50%"}>{t('search_product:dialogLastUpdate')}</Box>
                <Box width={"50%"} textAlign="right"> <b>{moment(data?.data?.deposit?.updatedAt).format('DD MMMM YYYY, HH:mm')}</b></Box>
              </Box>
              <Box display="flex" marginTop={8} fontSize={20} justifyContent="space-between">
                <Box width={"50%"}><b>{t('search_product:dialogBalanceTotal')}</b></Box>
                <Box width={"50%"} textAlign="right"><b>{data?.data?.deposit?.saldo && rupiahFormat(data?.data?.deposit?.saldo)}</b></Box>
              </Box>
            </Box>
          )}
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseScan}>
            <Close />
          </IconButton>
        </DialogTitle>
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
