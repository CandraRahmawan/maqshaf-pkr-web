import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { func, object } from 'prop-types';
import DashboardContainer from 'apps/containers/Dashboard/Dashboard.container';
import DashboardLayout from 'apps/layouts/Dashboard.layout';

const ProductListView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t('dashboard:metaTitle')}</title>
        <meta name="description" content={t('dashboard:metaDescription')} />
      </Helmet>
      <DashboardLayout t={t} history={history}>
        <DashboardContainer t={t} history={history} location={location} />
      </DashboardLayout>
    </>
  );
};

ProductListView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(['dashboard', 'glossary'])(ProductListView);
