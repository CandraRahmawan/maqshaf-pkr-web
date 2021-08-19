import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { element, func, object } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Footer, Header, SidebarMenuLeft } from 'apps/components/core';
import { getUser } from 'helpers/auth.helper';

const useStyles = makeStyles((theme) => ({
  drawer_header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,

    justifyContent: 'flex-end',
  },

  main_wrapper: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition:
      theme.transitions.create(
        'margin',
        {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingscreen,
        }
      ),
  },

  content_shift: {
    transition:
      theme.transitions.create(
        'margin',
        {
          easing: theme.transitions.easing.easeout,
          duration: theme.transitions.duration.enteringscreen,
        }
      ),
    marginLeft: 0,
  },
}));

const DashboardLayout = ({ children, t, history }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerClose = () => setOpen(false);
  const handleDrawerOpen = () => setOpen(true);

  useEffect(() => {
    if (!getUser()) {
      history.replace('/dashboard/login');
    }
  }, []);

  return (
    <>
      <Header.Dashboard t={t} open={open} handleDrawerOpen={handleDrawerOpen} />
      <SidebarMenuLeft t={t} open={open} handleDrawerClose={handleDrawerClose} />
      <main
        className={clsx(classes.content, {
          [classes.content_shift]: open,
        })}
      >
        <div className={classes.drawer_header} />
        {children}
      </main>
      <Footer t={t} />
    </>
  );
};

DashboardLayout.propTypes = {
  history: object.isRequired,
  children: element.isRequired,
  t: func.isRequired,
};

export default DashboardLayout;
