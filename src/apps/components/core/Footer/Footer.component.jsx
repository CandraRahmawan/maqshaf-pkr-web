import { Grid, Box, Container } from "@material-ui/core";
import { func } from "prop-types";

import useStyles from "./style";

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
