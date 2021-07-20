import { element, func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Footer } from "apps/components/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
    height: "100vh",
  },
}));

const ShopProductLayout = ({ children, t }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
      <Footer t={t} />
    </div>
  );
};

ShopProductLayout.propTypes = {
  children: element.isRequired,
  t: func.isRequired,
};

export default ShopProductLayout;
