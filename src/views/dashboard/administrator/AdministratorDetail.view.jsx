import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { func, object } from 'prop-types';
import AdministratorDetailContainer from 'apps/containers/Dashboard/Administrator/AdministratorDetail.container';
import DashboardLayout from 'apps/layouts/Dashboard.layout';

const AdministratorDetailView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t('dashboard_administrator:metaTitle')}</title>
        <meta name="description" content={t('dashboard_administrator:metaDescription')} />
      </Helmet>
      <DashboardLayout t={t} history={history}>
        <AdministratorDetailContainer t={t} history={history} location={location} />
      </DashboardLayout>
    </>
  );
};

AdministratorDetailView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(['dashboard_administrator', 'glossary'])(AdministratorDetailView);
