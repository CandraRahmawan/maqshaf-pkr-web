import SweetAlert from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Default = withReactContent(SweetAlert);

const messageAlert = {
  success: (alert) =>
    Default.fire({
      title: alert.title,
      icon: "success",
      text: alert.text,
    }).then(() => {
      if (alert.href) {
        window.location.href = alert.href;
      }
      return Promise.resolve();
    }),
  error: (alert) =>
    Default.fire({
      title: alert.title,
      icon: "error",
      text: alert.text,
    }).then(() => {
      if (alert.href) {
        window.location.href = alert.href;
      }
      return Promise.resolve();
    }),
};

export default messageAlert;
