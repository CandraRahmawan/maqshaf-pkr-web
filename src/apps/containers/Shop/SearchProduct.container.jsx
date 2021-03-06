import { useState, useEffect } from 'react';
import { object, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Alert from '@material-ui/lab/Alert';
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
  Button,
  CircularProgress,
  DialogActions,
} from '@material-ui/core';
import moment from 'moment';
import QrReader from 'react-qr-reader';
import { FooterNavigation } from 'apps/components/core';
import { useSelector } from 'react-redux';
import { Search, Close } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { Card, Spinner } from 'apps/components/ui';
import { SearchProduct } from 'apps/components/core';
import useResetPINHook from 'hooks/Shop/useResetPIN.hook';
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
  const [alert, setAlert] = useState({})
  const [scanType, setScanType] = useState('PIN')
  const { goodList, isLoading, setKeyword } = useSearchProductHook();
  const { items, total, qty } = useSelector((state) => state.cartSelected);
  const { action } = useParams();
  const isIdentityAction = action === 'identitas';
  const isEnterPinAction = action === 'pin';

  const { data, showQRReader, setShowQRReader,
    handleScan, handleScanError } = useCheckBalancedHook();

  const { error, mutate, isLoading: isLoadingReset } = useResetPINHook(history, setAlert, t, data?.data?.user?.userId)

  useEffect(() => {
    if (error) {
      setAlert({
        isShow: true,
        type: 'error',
        message: error?.message || 'common:alert.failed',
      });
    }

  }, [error])

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    history.replace('/');
    setOpen(false);
  };

  const handleOpenScan = (type) => {
    setScanType(type)
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

  const validationSchema = yup.object({
    oldPin: yup.string().required(t('search_product:validation.requiredOldPin')),
    pin: yup.string().required(t('search_product:validation.requiredPin')),
    confirmPin: yup.string().required(t('search_product:validation.requiredConfirmPin'))
      .oneOf([yup.ref('pin'), null], t('search_product:validation.matchConfirmPin'))
  });

  const formik = useFormik({
    initialValues: {
      pin: '',
      confirmPin: '',
      oldPin: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (data?.data?.user?.userId) {
        setAlert({})
        mutate(values, data?.data?.user?.userId);
      }
    },
  });

  const balanceContent = (
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
  )

  const PINContent = (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      {alert.isShow && <Alert severity={alert.type}>{alert.message}</Alert>}
      <Box paddingLeft={3} marginTop={4}>
        <Box display="flex" marginTop={1}><Box width={120}>{t('search_product:dialogNIS')}</Box> : &nbsp; <b>{data?.data?.user?.nis}</b></Box>
        <Box display="flex" marginTop={1}><Box width={120}>{t('search_product:dialogName')}</Box> : &nbsp; <b>{data?.data?.user?.fullName}</b></Box>
        <Box display="flex" marginTop={1}><Box width={120}>{t('search_product:dialogClass')}</Box> : &nbsp;<b>{data?.data?.user?.class}</b></Box>
      </Box>
      <Box marginTop={4} paddingLeft={3} paddingRight={2}>
        <Box marginBottom={4}>
          <TextField
            name="oldPin"
            value={formik.values.oldPin}
            error={formik.touched.oldPin && Boolean(formik.errors.oldPin)}
            onChange={formik.handleChange}
            helperText={formik.touched.oldPin && formik.errors.oldPin}
            label={t('common:label.enterOldPin')}
            type="password"
            className={classes.input_pin}
          />
        </Box>
        <Box marginBottom={4}>
          <TextField
            name="pin"
            value={formik.values.pin}
            error={formik.touched.pin && Boolean(formik.errors.pin)}
            onChange={formik.handleChange}
            helperText={formik.touched.pin && formik.errors.pin}
            label={t('common:label.enterPin')}
            type="password"
            className={classes.input_pin}
          />
        </Box>
        <Box marginBottom={4}>
          <TextField
            name="confirmPin"
            value={formik.values.confirmPin}
            error={formik.touched.confirmPin && Boolean(formik.errors.confirmPin)}
            onChange={formik.handleChange}
            helperText={formik.touched.confirmPin && formik.errors.confirmPin}
            label={t('common:label.enterConfirmPin')}
            type="password"
            className={classes.input_pin}
          />
        </Box>
      </Box>
      <DialogActions>
        <Box bottom={20} position={"absolute"}>
          <Button
            onClick={() => {
              handleCloseScan();
            }}
            color="primary"
          >
            {t('common:cancel')}
          </Button>
          <Button
            type="submit"
            color="primary"
            disabled={isLoadingReset}
          >
            {t('common:save')}
            {isLoadingReset && (
              <CircularProgress size={18} className={classes.button_progress} />
            )}
          </Button>
        </Box>
      </DialogActions>
    </form>
  )

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
                      masterGoodsId={item.masterGoodsId}
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
      <FooterNavigation t={t} cartTotal={qty} history={history} handleOpenModal={handleOpenModal} handleOpenScan={handleOpenScan} />
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
          <Typography variant="h6">
            {scanType === 'BALANCE' ? t('search_product:menu.balance') : t('search_product:menu.resetPin')}
          </Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseScan}>
            <Close />
          </IconButton>
        </DialogTitle>
        {showQRReader ? (
          <QrReader
            delay={300}
            onError={handleScanError}
            onScan={handleScan}
            style={{ width: '100%', marginTop: 20 }}
          />
        ) : (
          scanType === 'BALANCE' ? balanceContent : PINContent
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
