import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { func, object } from 'prop-types';
import NotFoundContainer from 'apps/containers/ErrorPage/NotFound.container';

const NotFoundView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t('error_page:metaTitle')}</title>
        <meta name="description" content={t('error_page:metaDescription')} />
      </Helmet>
      <NotFoundContainer t={t} history={history} location={location} />
    </>
  );
};

NotFoundView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(['error_page'])(NotFoundView);
