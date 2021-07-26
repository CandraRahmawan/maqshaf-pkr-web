import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      minWidth: 150,
    },

    "& .MuiCardContent-root": {
      [theme.breakpoints.down("xs")]: {
        paddingBottom: 0,
      },
    },

    "& .MuiTypography-h5": {
      width: 200,
      height: 50,
      fontSize: 20,
      [theme.breakpoints.down("xs")]: {
        width: "auto",
        height: 40,
        fontSize: 16,
      },
    },

    "& .MuiTypography-h6": {
      fontWeight: 400,
      [theme.breakpoints.down("xs")]: {
        fontSize: 16,
      },
    },

    "& span.MuiTypography-colorTextSecondary": {
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
      },
    },

    "& button": {
      width: "100%",
    },
  },

  media: {
    height: 140,
    backgroundSize: "contain",
    margin: 16,
  },

  content_background: {
    backgroundColor: "#f5f5f5",
  },
}));
