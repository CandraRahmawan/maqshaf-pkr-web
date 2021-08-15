import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import clsx from 'clsx';
import { func } from 'prop-types';

import useStyles from './style';

const HeaderComponent = ({ t, open, handleDrawerOpen }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.app_bar, {
          [classes.app_bar_shift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menu_button, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            {t('glossary:dashboardTitle')}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

HeaderComponent.propTypes = {
  t: func.isRequired,
};

export default HeaderComponent;
