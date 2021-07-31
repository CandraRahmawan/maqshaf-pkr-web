import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  primaryColor: "#00a8ff",
  orangeColor: "#ff9100",
  whiteColor: "#fff",
  color: {
    white: "#fff",
    black: "#000",
  },
});

const ThemesProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemesProvider;
