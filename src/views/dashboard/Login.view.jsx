import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { func, object } from 'prop-types';
import LoginContainer from 'apps/containers/Dashboard/Login.container';
import DashboardLayout from 'apps/layouts/Dashboard.layout';

const LoginView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t('dashboard_login:metaTitle')}</title>
        <meta name="description" content={t('dashboard_login:metaDescription')} />
      </Helmet>
      <DashboardLayout t={t}>
        <LoginContainer t={t} history={history} location={location} />
      </DashboardLayout>
    </>
  );
};

LoginView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(['dashboard_login', 'glossary'])(LoginView);
