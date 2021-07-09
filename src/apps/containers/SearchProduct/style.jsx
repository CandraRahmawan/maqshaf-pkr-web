const styles = (theme) => ({
  root: {
    color: theme.whiteColor,
  },
  wrapperHeader: {
    padding: "16px",
    color: theme.whiteColor,
    backgroundColor: theme.primaryColor,
    "& h4": {
      marginTop: "4px",
      marginBottom: "32px",
    },
    "& h2": {
      marginTop: "0",
      marginBottom: "4px",
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
      padding: "12px",
      fontSize: "22px",
    },
  },
  search: {
    width: "100%",
    backgroundColor: "#2196f3",
  },
});

export default styles;
