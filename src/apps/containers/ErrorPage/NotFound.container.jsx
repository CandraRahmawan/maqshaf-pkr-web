import { func, object } from 'prop-types';
import BlockIcon from '@material-ui/icons/Block';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './style';

const NotFoundContainer = (props) => {
  const { classes, t, history } = props;
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <BlockIcon />
        <h1>{t('error_page:title')}</h1>
        <h3>{t('error_page:subTitle')}</h3>
        <Button
          variant="contained"
          color="default"
          size="large"
          onClick={() => history.replace('/')}
        >
          {t('common:backToHome')}
        </Button>
      </div>
    </div>
  );
};

NotFoundContainer.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
  classes: object.isRequired,
};

export default withStyles(styles)(NotFoundContainer);
