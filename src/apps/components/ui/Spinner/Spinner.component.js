import { CircularProgress, Grid } from "@material-ui/core";
import { string } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginTop: "30%",

    "& p": {
      color: "#000",
    },
  },
});

const SpinnerComponent = ({ label }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.root} item xs={12}>
        <CircularProgress />
        <p>{label}</p>
      </Grid>
    </Grid>
  );
};

SpinnerComponent.propTypes = {
  label: string,
};

export default SpinnerComponent;
