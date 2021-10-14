import { element, func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ShopProductLayout = ({ children, t }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

ShopProductLayout.propTypes = {
  children: element.isRequired,
  t: func.isRequired,
};

export default ShopProductLayout;
