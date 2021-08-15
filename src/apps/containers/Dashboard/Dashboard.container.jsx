import { func, object } from 'prop-types';

const DashboardContainer = () => {
  return <div>Dashbaord</div>;
};

DashboardContainer.propTypes = {
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default DashboardContainer;
