import { element } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
  },
}));

const ShopProductLayout = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

ShopProductLayout.propTypes = {
  children: element.isRequired,
};

export default ShopProductLayout;
