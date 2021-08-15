import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { func, object } from 'prop-types';
import AdministratorListContainer from 'apps/containers/Dashboard/Administrator/AdministratorList.container';
import DashboardLayout from 'apps/layouts/Dashboard.layout';

const AdministratorListView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t('dashboard_administrator:metaTitle')}</title>
        <meta name="description" content={t('dashboard_administrator:metaDescription')} />
      </Helmet>
      <DashboardLayout t={t}>
        <AdministratorListContainer t={t} history={history} location={location} />
      </DashboardLayout>
    </>
  );
};

AdministratorListView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(['dashboard_administrator', 'glossary'])(AdministratorListView);
