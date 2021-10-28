import {
  Box,
  IconButton,
  Button,
  DialogContent,
  DialogActions,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Remove, Add } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { func, array, object, number } from 'prop-types';
import { rupiahFormat } from 'helpers/formattor.helper';
import { clearCart, selectCart } from 'redux/reducers/cartSelected.reducer';

import useStyles from './useStyle';
import { isEmpty } from 'lodash';

const SummaryDialogComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t, handleCloseModal, items, history, total } = props;

  const addToCart = (item, type) => {
    let tempSelected = items.map((obj) => obj)
    const idx = tempSelected.findIndex((obj) => obj.masterGoodsId === item.masterGoodsId)
    if (type === 'ADD') {
      const selected = { ...tempSelected[idx], qty: tempSelected[idx].qty + 1 }
      tempSelected[idx] = selected
    } else {
      if (tempSelected[idx].qty > 1) {
        const selected = { ...tempSelected[idx], qty: tempSelected[idx].qty - 1 }
        tempSelected[idx] = selected
      } else {
        const tempSelectedFiltered = tempSelected.filter((obj) => obj.masterGoodsId !== item.masterGoodsId)
        tempSelected = tempSelectedFiltered
      }
    }

    if (isEmpty(tempSelected)) {
      dispatch(clearCart())
    } else {
      dispatch(selectCart({ items: tempSelected }))
    }
  }

  return (
    <>
      <DialogContent>
        <p>{t('search_product:dialogTotalSummaryInfo')}</p>
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
                  secondary={
                    <Box>
                      {rupiahFormat(item.price, item.currency)}
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        Qty:
                        <Box>
                          <IconButton onClick={() => addToCart(item, 'REMOVE')} color="primary" aria-label="upload picture" component="span">
                            <Remove />
                          </IconButton>
                          {item.qty}
                          <IconButton onClick={() => addToCart(item, 'ADD')} color="primary" aria-label="upload picture" component="span">
                            <Add />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  }
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
        {
          items.length === 0 ? (
            <Box display="flex">
              <div>
                <Typography variant="subtitle1" color="disabled">
                  {t('search_product:dialogEmptyBuy')}
                </Typography>
              </div>
            </Box>
          ) : (
            <Box display="flex" justifyContent="space-between">
              <div>
                <Typography variant="subtitle1" color="disabled">
                  {t('search_product:dialogTotalBuy')}
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1">{rupiahFormat(total)}</Typography>
              </div>
            </Box>
          )
        }

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
        <Button disabled={items.length === 0} onClick={() => history.push('/identitas')} color="primary">
          {t('common:next')}
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
