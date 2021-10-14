import { Paper, Box, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { func, object } from 'prop-types';
import { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ResetIcon from '@material-ui/icons/LockOpen';
import ScanIcon from '@material-ui/icons/CropFree';
import CartIcon from '@material-ui/icons/ShoppingCart';

const FooterNavigationComponent = ({ t, history, handleOpenModal, handleOpenScan }) => {
  const [value, setValue] = useState(0);

  const redirect = (val) => {
    switch (val) {
      case 0:
        history.replace('/')
        break;
      case 1:
        history.replace('/')
        break;
      case 2:
        setValue(0)
        handleOpenScan()
        break;
      case 3:
        setValue(0)
        handleOpenModal()
        break;
      default:
        history.replace('/')
        break;
    }
  }

  return (
    <Paper sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} elevation={3}>
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
        <BottomNavigationAction label="Keranjang" icon={<CartIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

FooterNavigationComponent.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  handleOpenModal: func.isRequired,
  handleOpenScan: func.isRequired,
};

export default FooterNavigationComponent;
