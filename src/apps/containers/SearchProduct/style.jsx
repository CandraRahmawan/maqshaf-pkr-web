const styles = (theme) => ({
  root: {
    color: theme.whiteColor,
  },
  wrapperHeader: {
    padding: "16px 0",
    color: theme.whiteColor,
    backgroundColor: theme.primaryColor,
    "& h4": {
      marginTop: 4,
      marginBottom: 32,
    },
    "& h2": {
      marginTop: 0,
      marginBottom: 4,
    },
    "& .MuiInputBase-root": {
      color: "inherit",
    },
    "& .MuiFormLabel-root": {
      color: "inherit",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: 12,
      fontSize: 22,
    },
  },
  search: {
    width: "100%",
    backgroundColor: "#2196f3",
    borderRadius: 10,
  },
  listProduct: {
    marginTop: 32,
    minHeight: 300,
  },
});

export default styles;
