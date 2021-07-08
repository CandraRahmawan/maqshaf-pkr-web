const styles = (theme) => ({
  rootStyle: {
    backgroundColor: theme.primaryColor,
    color: theme.whiteColor,
  },
  wrapperStyle: {
    padding: "16px 32px",
    color: theme.whiteColor,
  },
  searchStyle: {
    width: "100%",
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #fff",
    },
  },
});

export default styles;
