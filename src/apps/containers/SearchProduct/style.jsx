const styles = (theme) => ({
  root: {
    color: theme.whiteColor,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: theme.orangeColor,
    color: theme.whiteColor,
  },
  badge: {
    position: "fixed",
    bottom: theme.spacing(8),
    right: theme.spacing(3),
    zIndex: 1,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
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
