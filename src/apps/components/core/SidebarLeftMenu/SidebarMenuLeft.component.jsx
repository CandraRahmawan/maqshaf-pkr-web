import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Dashboard, Storefront } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';

import useStyles from './style';

const SidebarMenuLeftComponent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { open, handleDrawerClose, t } = props;

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
          <ListItem button key="producy">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary={t('common:leftMenu.product')} />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default SidebarMenuLeftComponent;
