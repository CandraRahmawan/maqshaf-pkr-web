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
        <title>{t("search_product:metaTitle")}</title>
        <meta
          name="description"
          content={t("search_product:metaDescription")}
        />
      </Helmet>
      <ShopProductLayout t={t}>
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

export default withTranslation(["search_product", "glossary"])(
  SearchProductView
);
