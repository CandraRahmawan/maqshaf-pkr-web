import { Helmet } from "react-helmet";
import { withTranslation } from "react-i18next";
import { func, object } from "prop-types";
import SearchProductContainer from "apps/containers/SearchProduct/SearchProduct.container";
import ShopProductLayout from "apps/layouts/ShopProduct.layout";

const SearchProductView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t("metaTitle")}</title>
        <meta name="description" content={t("metaTitle")} />
      </Helmet>
      <ShopProductLayout>
        <SearchProductContainer t={t} history={history} location={location} />
      </ShopProductLayout>
    </>
  );
};

SearchProductView.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation("search_product")(SearchProductView);
