import { Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { func } from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e3f2fd",
    borderTop: "2px solid #1a237e",
    marginTop: 30,
    textAlign: "center",
    position: "relative",
  },

  container: {
    margin: "12px auto 8px auto",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      margin: "8px auto",
    },

    "& img": {
      marginRight: 15,
      width: 50,
      height: 50,
      [theme.breakpoints.down("xs")]: {
        height: 35,
        width: 35,
      },
    },

    "& h2": {
      margin: 0,
      [theme.breakpoints.down("xs")]: {
        fontSize: 18,
      },
    },
  },

  bottom: {
    backgroundColor: "#1a237e",

    "& h4": {
      marginTop: 0,
      marginBottom: 0,
      padding: "16px 0",
      color: theme.color.white,
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
        padding: "12px 0",
      },
    },
  },
}));

const FooterComponent = ({ t }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.root} item xs={12}>
        <Container className={classes.container}>
          <Box display="flex" justifyContent="center">
            <div>
              <img src="/assets/logo192.png" />
            </div>
            <Box alignSelf="center">
              <h2>{t("glossary:companyName")}</h2>
            </Box>
          </Box>
        </Container>
        <div className={classes.bottom}>
          <Container>
            <h4>{t("glossary:copyright")}</h4>
          </Container>
        </div>
      </Grid>
    </Grid>
  );
};

FooterComponent.propTypes = {
  t: func.isRequired,
};

export default FooterComponent;
