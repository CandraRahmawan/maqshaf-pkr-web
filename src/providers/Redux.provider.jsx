import { Provider } from "react-redux";
import store from "redux/store";
import { element } from "prop-types";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

ReduxProvider.propTypes = {
  children: element.isRequired,
};
