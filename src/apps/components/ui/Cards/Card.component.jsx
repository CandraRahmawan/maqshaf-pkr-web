import { useState } from 'react';
import { string, number, func, array } from 'prop-types';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useMediaQuery,
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { rupiahFormat } from 'helpers/formattor.helper';

import { useStyles } from './style';

const CardComponent = (props) => {
  const { image, title, price, currency, category, masterGoodsId, t, openModal, addCartAction, selectedItems } =
    props;
  const [showAlert, setShowAlert] = useState(false);
  const classes = useStyles();
  const isXsDevice = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const handleShowAlert = () => setShowAlert(true);


  const addToCart = () => {
    let tempSelected = selectedItems
    const idx = tempSelected.findIndex((obj) => obj.masterGoodsId === masterGoodsId)
    if (idx !== -1) {
      const selected = { ...tempSelected[idx], qty: tempSelected[idx].qty + 1 }
      const tempSelectedFiltered = tempSelected.filter((obj) => obj.masterGoodsId !== masterGoodsId)
      tempSelected = [
        selected,
        ...tempSelectedFiltered,
      ]
    } else {
      tempSelected = [
        {
          masterGoodsId,
          image,
          qty: 1,
          currency,
          price,
          name: title,
        },
        ...selectedItems,
      ]
    }
    addCartAction(tempSelected)
  }

  return (
    <Card className={classes.root} key={title}>
      <CardActionArea
        className={classes.content_background}
        onClick={() => {
          openModal();
          addCartAction([
            {
              masterGoodsId,
              qty: 1,
              price,
              currency,
              name: title,
              image,
            },
          ]);
        }}
      >
        <CardMedia className={classes.media} image={image} title={title} />
      </CardActionArea>
      <CardContent>
        <Typography color="textSecondary" variant="p">
          {category}
        </Typography>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography color="textSecondary" variant="h6">
          {rupiahFormat(price, currency)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={addToCart}
        >
          {isXsDevice ? (
            <AddShoppingCartIcon onClick={handleShowAlert} />
          ) : (
            <span onClick={handleShowAlert}>{t('search_product:addToCart')}}</span>
          )}
        </Button>
      </CardActions>
      <Snackbar open={showAlert} autoHideDuration={2000} onClose={() => setShowAlert(false)}>
        <Alert severity="success" variant="filled">
          {t('search_product:alert.successAddCart')}
        </Alert>
      </Snackbar>
    </Card>
  );
};

CardComponent.propTypes = {
  t: func.isRequired,
  masterGoodsId: string.isRequired,
  image: string.isRequired,
  title: string.isRequired,
  price: number.isRequired,
  currency: string.isRequired,
  category: string.isRequired,
  openModal: func.isRequired,
  addCartAction: func.isRequired,
  selectedItems: array.isRequired,
};

export default CardComponent;
