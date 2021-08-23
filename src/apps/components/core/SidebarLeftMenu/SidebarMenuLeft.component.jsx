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
  const classes = useStyles();
  const theme = useTheme();
  const { open, handleDrawerClose, t } = props;
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmenuClick = () => {
    setOpenSubmenu(!openSubmenu);
  };

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
          <ListItem button key="dashboard">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary={t('common:leftMenu.dashboard')} />
          </ListItem>
        </Link>
        <Link to="/dashboard/produk">
          <ListItem button key="product">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary={t('common:leftMenu.product')} />
          </ListItem>
        </Link>
        <Link to="/dashboard/santri">
          <ListItem button key="user">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary={t('common:leftMenu.user')} />
          </ListItem>
        </Link>
        <Link to="/dashboard/administrator">
          <ListItem button key="administrator">
            <ListItemIcon>
              <SupervisedUserCircle />
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
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <CallReceived />
                </ListItemIcon>
                <ListItemText primary={t('common:leftMenu.in')} />
              </ListItem>
            </Link>
            <Link to="/dashboard/transaksi/keluar">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <CallMade />
                </ListItemIcon>
                <ListItemText primary={t('common:leftMenu.out')} />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Link to="/dashboard/cek-saldo">
          <ListItem button key="balanced">
            <ListItemIcon>
              <CreditCard />
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
