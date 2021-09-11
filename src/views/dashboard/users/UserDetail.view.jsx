import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { func, object } from 'prop-types';
import UserDetailContainer from 'apps/containers/Dashboard/Users/UserDetail.container';
import DashboardLayout from 'apps/layouts/Dashboard.layout';

const UserDetailView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t('dashboard_user:metaTitle')}</title>
        <meta name="description" content={t('dashboard_user:metaDescription')} />
      </Helmet>
      <DashboardLayout t={t} history={history}>
        <UserDetailContainer t={t} history={history} location={location} />
      </DashboardLayout>
    </>
  );
};

UserDetailView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(['dashboard_user', 'glossary'])(UserDetailView);
