import { Helmet } from "react-helmet";
import { withTranslation } from "react-i18next";
import { func, object } from "prop-types";
import ProductListContainer from "apps/containers/Dashboard/Products/ProductList.container";
import DashboardLayout from "apps/layouts/Dashboard.layout";

const ProductListView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t("dashboard_product:metaTitle")}</title>
        <meta
          name="description"
          content={t("dashboard_product:metaDescription")}
        />
      </Helmet>
      <DashboardLayout t={t}>
        <ProductListContainer t={t} history={history} location={location} />
      </DashboardLayout>
    </>
  );
};

ProductListView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation(["dashboard_product", "glossary"])(
  ProductListView
);
