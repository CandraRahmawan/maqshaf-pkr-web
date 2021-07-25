import { object, func } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, Container, Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Card, Spinner } from "apps/components/ui";
import useSearchProductHook from "hooks/useSearchProduct.hook";

import styles from "./style";

const SearchProductContainer = (props) => {
  const { classes, t } = props;
  const { goodList, isLoading, setKeyword } = useSearchProductHook();

  return (
    <div className={classes.root}>
      <div className={classes.wrapperHeader}>
        <Container>
          <h2>{t("greeting")}</h2>
          <h4>{t("subGreeting")}</h4>
          <TextField
            onChange={(event) => setKeyword(event.target.value)}
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
        </Container>
      </div>
      <Container className={classes.listProduct}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            {isLoading ? (
              <Spinner label={t("common:loading")} />
            ) : (
              <Grid container justifyContent="center" spacing={2}>
                {goodList?.data?.map((item) => (
                  <Grid key={item.masterGoodsId} item>
                    <Card
                      t={t}
                      image={item.image}
                      title={item.name}
                      price={item.price}
                      currency={item.currency}
                      category={item.category}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
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
