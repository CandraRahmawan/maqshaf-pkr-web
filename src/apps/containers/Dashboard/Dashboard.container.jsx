import { func, object } from 'prop-types';

const ProductListContainer = () => {
  return <div>Dashbaord</div>;
};

ProductListContainer.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default ProductListContainer;
