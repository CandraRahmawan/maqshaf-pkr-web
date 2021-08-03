import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },

  drawer_paper: {
    width: 240,
  },

  drawer_header: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,

    justifyContent: "flex-end",
  },
}));

export default useStyles;
