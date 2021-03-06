import { createMuiTheme } from "@material-ui/core/styles";
import { amber, blueGrey } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    common: {
      blue: blueGrey[500]
    },
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: amber[500],
    },
  },
  typography: {
    h3: {
      fontWeight:700
    },
    tab:{
      color:"white"
    }
    
    }
});