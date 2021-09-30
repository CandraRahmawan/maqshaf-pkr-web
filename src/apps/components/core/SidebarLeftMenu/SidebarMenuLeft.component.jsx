import { useState } from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from '@material-ui/core';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Dashboard,
  Storefront,
  People,
  SupervisedUserCircle,
  ExpandLess,
  ExpandMore,
  CallReceived,
  CallMade,
  AccountBalanceWallet,
  CreditCard,
  ExitToApp,
} from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import { Dialog } from 'apps/components/ui';
import { logout } from 'helpers/auth.helper';

import useStyles from './style';

const SidebarMenuLeftComponent = (props) => {
  const history = useHistory()
  const classes = useStyles();
  const theme = useTheme();
  const { open, handleDrawerClose, t } = props;
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmenuClick = () => {
    setOpenSubmenu(!openSubmenu);
  };

  console.log(history.location)

  const getActiveClasses = (url) => {
    if (url !== '/dashboard') {
      if(history.location.pathname.startsWith(url)) {
        return classes.active
      }
    } else {
      if (history.location.pathname === '/dashboard') {
        return classes.active
      }
    }
    
    return ''
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawer_paper,
      }}
    >
      <div className={classes.drawer_header}>
        <div className={classes.menu_title_wrapper}>
          <img src="/assets/logo192.png" width={30} height={30} />
          <Typography variant="h5">{t('common:leftMenu.menu')}</Typography>
        </div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <Link to="/dashboard">
          <ListItem button key="dashboard"  className={getActiveClasses('/dashboard')}>
            <ListItemIcon>
              <Dashboard className={getActiveClasses('/dashboard')} />
            </ListItemIcon>
            <ListItemText primary={t('common:leftMenu.dashboard')} />
          </ListItem>
        </Link>
        <Link to="/dashboard/produk">
          <ListItem button key="product" className={getActiveClasses('/dashboard/produk')}>
            <ListItemIcon>
              <Storefront className={getActiveClasses('/dashboard/produk')} />
            </ListItemIcon>
            <ListItemText primary={t('common:leftMenu.product')} />
          </ListItem>
        </Link>
        <Link to="/dashboard/santri">
          <ListItem button key="user" className={getActiveClasses('/dashboard/santri')}>
            <ListItemIcon>
              <People className={getActiveClasses('/dashboard/santri')} />
            </ListItemIcon>
            <ListItemText primary={t('common:leftMenu.user')} />
          </ListItem>
        </Link>
        <Link to="/dashboard/administrator">
          <ListItem button key="administrator" className={getActiveClasses('/dashboard/administrator')}>
            <ListItemIcon>
              <SupervisedUserCircle className={getActiveClasses('/dashboard/administrator')} />
            </ListItemIcon>
            <ListItemText primary={t('common:leftMenu.admin')} />
          </ListItem>
        </Link>
        <ListItem button key="transaction" onClick={handleSubmenuClick}>
          <ListItemIcon>
            <AccountBalanceWallet />
          </ListItemIcon>
          <ListItemText primary={t('common:leftMenu.transaction')} />
          {openSubmenu ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/dashboard/transaksi/masuk">
              <ListItem button className={clsx(classes.nested, getActiveClasses('/dashboard/transaksi/masuk'))}>
                <ListItemIcon>
                  <CallReceived className={getActiveClasses('/dashboard/transaksi/masuk')} />
                </ListItemIcon>
                <ListItemText primary={t('common:leftMenu.in')} />
              </ListItem>
            </Link>
            <Link to="/dashboard/transaksi/keluar">
              <ListItem button className={clsx(classes.nested, getActiveClasses('/dashboard/transaksi/keluar'))}>
                <ListItemIcon>
                  <CallMade className={getActiveClasses('/dashboard/transaksi/keluar')} />
                </ListItemIcon>
                <ListItemText primary={t('common:leftMenu.out')} />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Link to="/dashboard/cek-saldo">
          <ListItem button key="balanced" className={getActiveClasses('/dashboard/cek-saldo')}>
            <ListItemIcon>
              <CreditCard  className={getActiveClasses('/dashboard/cek-saldo')}/>
            </ListItemIcon>
            <ListItemText primary={t('common:leftMenu.checkBalanced')} />
          </ListItem>
        </Link>
        <div onClick={() => setOpenDialog(true)}>
          <ListItem button key="logout">
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary={t('common:leftMenu.logout')} />
          </ListItem>
        </div>
      </List>
      <Dialog
        t={t}
        open={openDialog}
        handleOk={logout}
        handleClose={() => setOpenDialog(false)}
        title={t('common:confirmation')}
        content={t('dashboard:confirmationLogout')}
      />
    </Drawer>
  );
};

export default SidebarMenuLeftComponent;
