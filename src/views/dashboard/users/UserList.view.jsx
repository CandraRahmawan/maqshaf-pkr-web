import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { func, object } from 'prop-types';
import UserListContainer from 'apps/containers/Dashboard/Users/UserList.container';
import DashboardLayout from 'apps/layouts/Dashboard.layout';

const UserListView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t('dashboard_user:metaTitle')}</title>
        <meta name="description" content={t('dashboard_user:metaDescription')} />
      </Helmet>
      <DashboardLayout t={t}>
        <UserListContainer t={t} history={history} location={location} />
      </DashboardLayout>
    </>
  );
};

UserListView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(['dashboard_user', 'glossary'])(UserListView);
