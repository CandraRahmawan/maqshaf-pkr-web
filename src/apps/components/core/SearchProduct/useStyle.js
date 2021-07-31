import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  list_modal_image: {
    marginRight: 12,

    "& img": {
      width: 50,
      height: 50,
    },
  },

  list_modal_text: {
    color: theme.color.black,
  },

  button_progress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },

  input_pin: {
    width: "100%",
  },
}));

export default useStyle;
