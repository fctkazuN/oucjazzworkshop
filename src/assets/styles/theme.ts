import { createMuiTheme } from '@material-ui/core/styles'
import { red, grey } from '@material-ui/core/colors'

export const light = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
      light: red[400],
      dark: red[600],
    },
    secondary: {
      main: grey[900],
      light: grey[800],
      dark: '#000000'
    },
    background: {
      default: grey[200],
      paper: "#fff"
    }
  }
})

export const dark = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
      light: red[400],
      dark: red[600],
    },
    secondary: {
      main: grey[900],
      light: grey[800],
      dark: '#000000'
    },
    background: {
      default: '#000',
      paper: grey[900]
    }
  }
})

export type ThemeType = typeof light | typeof dark;
