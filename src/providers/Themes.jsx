import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  primaryColor: "#00a8ff",
  whiteColor: "#fff",
  color: {
    white: "#fff",
  },
});

const Themes = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Themes;
