import { useState, useEffect } from "react";
import { object } from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Card } from "apps/components/ui";
import styles from "./style";

const api_url =
  process.env.NODE_ENV === "development" ? "" : process.env.REACT_APP_API;

const SearchProductContainer = (props) => {
  const { classes, t } = props;
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios(`${api_url}/mastergood/all`).then((resp) => setGoods(resp.data.data));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.wrapperHeader}>
        <h2>{t("greeting")}</h2>
        <h4>{t("subGreeting")}</h4>
        <form oValidate autoComplete="off">
          <TextField
            size="medium"
            variant="outlined"
            className={classes.search}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="white" />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
      <div>
        {goods?.map((item) => (
          <div>
            <Card
              image={item.image}
              title={item.name}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

SearchProductContainer.propTypes = {
  t: object.isRequired,
  history: object.isRequired,
  location: object.isRequired,
  classes: object.isRequired,
};

export default withStyles(styles)(SearchProductContainer);
