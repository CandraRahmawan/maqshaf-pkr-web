import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import styles from "./style";

const SearchView = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Cari" />
        </form>
      </div>
    </div>
  );
};

SearchView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchView);
