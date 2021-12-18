import { Paper, Badge, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { func, object } from 'prop-types';
import { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ResetIcon from '@material-ui/icons/LockOpen';
import ScanIcon from '@material-ui/icons/CropFree';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { number } from 'prop-types';

const FooterNavigationComponent = ({ t, history, cartTotal, handleOpenModal, handleClickMenu }) => {
  const [value, setValue] = useState(0);

  const redirect = (val) => {
    switch (val) {
      case 0:
        history.replace('/')
        break;
      case 1:
        setValue(0)
        handleClickMenu('PIN')
        setTimeout(() => {
          handleOpenModal()
        }, 1000)
        break;
      case 2:
        setValue(0)
        handleClickMenu('BALANCE')
        setTimeout(() => {
          handleOpenModal()
        }, 1000)
        break;
      case 3:
        setValue(0)
        handleClickMenu('')
        setTimeout(() => {
          handleOpenModal()
        }, 1000)
        break;
      default:
        history.replace('/')
        break;
    }
  }

  return (
    <Paper sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} style={{ position: 'fixed', bottom: 0, width: '100%' }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          redirect(newValue);
        }}
      >
        <BottomNavigationAction label="Beranda" icon={<HomeIcon />} />
        <BottomNavigationAction label="Reset PIN" icon={<ResetIcon />} />
        <BottomNavigationAction label="Cek Saldo" icon={<ScanIcon />} />
        <BottomNavigationAction label="Keranjang" icon={
          <>
            <CartIcon />
            {
              cartTotal > 0 && (
                <Badge badgeContent={cartTotal} color="primary" style={{
                  width: 20,
                  top: -20
                }}>
                </Badge>
              )
            }
          </>
        } />
      </BottomNavigation>
    </Paper>
  );
};

FooterNavigationComponent.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  handleOpenModal: func.isRequired,
  handleOpenScan: func.isRequired,
  cartTotal: number,
};

FooterNavigationComponent.defaultProps = {
  cartTotal: 0
}


export default FooterNavigationComponent;
