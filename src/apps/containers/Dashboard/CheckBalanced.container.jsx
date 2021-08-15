import { func, object } from 'prop-types';

const CheckBalancedContainer = () => {
  return <div>Check Balanced</div>;
};

CheckBalancedContainer.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default CheckBalancedContainer;
