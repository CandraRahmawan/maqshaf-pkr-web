import { useState, useEffect } from "react";
import { object, func } from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, Container, Grid } from "@material-ui/core";
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
        <Container>
          <h2>{t("greeting")}</h2>
          <h4>{t("subGreeting")}</h4>
          <form autoComplete="off">
            <TextField
              size="medium"
              variant="outlined"
              className={classes.search}
              placeholder={t("searchPlaceholder")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="white" />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Container>
      </div>
      <Container className={classes.listProduct}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              {goods?.map((item) => (
                <Grid key={item.masterGoodsId} item>
                  <Card
                    image={item.image}
                    title={item.name}
                    price={item.price}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

SearchProductContainer.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
  classes: object.isRequired,
};

export default withStyles(styles)(SearchProductContainer);
