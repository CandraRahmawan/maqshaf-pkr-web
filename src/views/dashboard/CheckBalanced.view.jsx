import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { func, object } from 'prop-types';
import CheckBalancedContainer from 'apps/containers/Dashboard/CheckBalanced.container';
import DashboardLayout from 'apps/layouts/Dashboard.layout';

const ProductListView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t('dashboard_check_balanced:metaTitle')}</title>
        <meta name="description" content={t('dashboard_check_balanced:metaDescription')} />
      </Helmet>
      <DashboardLayout t={t}>
        <CheckBalancedContainer t={t} history={history} location={location} />
      </DashboardLayout>
    </>
  );
};

ProductListView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(['dashboard_check_balanced', 'glossary'])(ProductListView);
