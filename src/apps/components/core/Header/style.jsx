import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  app_bar: {
    transition:
      theme.transitions.create(
        ["margin",
        "width"],
        {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingscreen,
        }
      ),
  },

  app_bar_shift: {
    width: `calc(100% - 240px)`,
    marginLeft: 240,
    transition:
      theme.transitions.create(
        ["margin",
        "width"],
        {
          easing: theme.transitions.easing.easeout,
          duration: theme.transitions.duration.enteringscreen,
        }
      ),
  },

  hide: {
    display: "none",
  },

  menu_button: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
