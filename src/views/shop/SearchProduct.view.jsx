import { Helmet } from "react-helmet";
import { withTranslation } from "react-i18next";
import { object } from "prop-types";
import SearchProductContainer from "apps/containers/SearchProduct/SearchProduct.container";

const SearchProductView = (props) => {
  const { t, history, location } = props;
  return (
    <>
      <Helmet>
        <title>{t("metaTitle")}</title>
        <meta name="description" content={t("metaTitle")} />
      </Helmet>
      <SearchProductContainer t={t} history={history} location={location} />
    </>
  );
};

SearchProductView.propTypes = {
  t: object.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withTranslation("search_product")(SearchProductView);
