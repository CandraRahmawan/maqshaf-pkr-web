import { Grid, Container } from '@material-ui/core';
import { func } from 'prop-types';

import useStyles from './style';

const FooterComponent = ({ t }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.root} item xs={12}>
        <div className={classes.bottom}>
          <Container>
            <h4>{t('glossary:copyright')}</h4>
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
