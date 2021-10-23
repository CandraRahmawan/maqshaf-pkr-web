import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { func, object } from 'prop-types';
import TransactionDebetListContainer from 'apps/containers/Dashboard/Transaction/TransactionDebetList.container';
import DashboardLayout from 'apps/layouts/Dashboard.layout';

const TransactionCreditListView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t('dashboard_transaction:metaTitle')}</title>
        <meta name="description" content={t('dashboard_transaction:metaDescription')} />
      </Helmet>
      <DashboardLayout t={t} history={history}>
        <TransactionDebetListContainer t={t} history={history} location={location} />
      </DashboardLayout>
    </>
  );
};

TransactionCreditListView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(['dashboard_transaction', 'glossary'])(TransactionCreditListView);
