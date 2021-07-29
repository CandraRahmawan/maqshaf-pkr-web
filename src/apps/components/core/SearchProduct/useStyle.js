import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  listmodalimage: {
    marginRight: 12,

    "& img": {
      width: 50,
      height: 50,
    },
  },

  listmodaltext: {
    color: theme.blackcolor,
  },
}));

export default useStyle;
