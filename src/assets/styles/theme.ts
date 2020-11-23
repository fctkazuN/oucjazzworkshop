import { createMuiTheme } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";

export const light = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
      light: red[400],
      dark: red[600],
      contrastText: "#fff",
    },
    secondary: {
      main: grey[900],
      light: grey[800],
      dark: "#000000",
      contrastText: "#fff",
    },
    background: {
      default: grey[200],
      paper: "#fff",
    },
  },
});

export const dark = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
      light: red[300],
      dark: red[900],
      contrastText: "#fff",
    },
    secondary: {
      main: grey[900],
      light: grey[800],
      dark: "#000000",
      contrastText: "#fff",
    },
    background: {
      default: "#000",
      paper: grey[900],
    },
    text: {
      primary: "#fff",
      secondary: grey[400],
    },
  },
});

export type ThemeType = typeof light | typeof dark;
