import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { func, object } from 'prop-types';
import ProductDetailContainer from 'apps/containers/Dashboard/Products/ProductDetail.container';
import DashboardLayout from 'apps/layouts/Dashboard.layout';

const AdministratorDetailView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t('dashboard_product:metaTitle')}</title>
        <meta name="description" content={t('dashboard_product:metaDescription')} />
      </Helmet>
      <DashboardLayout t={t} history={history}>
        <ProductDetailContainer t={t} history={history} location={location} />
      </DashboardLayout>
    </>
  );
};

AdministratorDetailView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(['dashboard_product', 'glossary'])(AdministratorDetailView);
