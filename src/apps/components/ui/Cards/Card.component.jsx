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
  const { image, title, price, currency, category, t, openModal, addCartAction, selectedItems } =
    props;
  const [showAlert, setShowAlert] = useState(false);
  const classes = useStyles();
  const isXsDevice = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const handleShowAlert = () => setShowAlert(true);
  return (
    <Card className={classes.root} key={title}>
      <CardActionArea
        className={classes.content_background}
        onClick={() => {
          openModal();
          addCartAction([
            {
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
          onClick={() =>
            addCartAction([
              ...selectedItems,
              {
                image,
                qty: 1,
                currency,
                price,
                name: title,
              },
            ])
          }
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
