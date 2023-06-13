import {createTheme} from "@mui/material/styles";
import {blue, deepOrange, orange, teal} from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: ["Open sans", "sans-serif"].join(","),
    h5: {
      fontFamily: "Roboto",
    },
  },
  palette: {
    primary: {main: teal[500]},
    secondary: {main: deepOrange[500]},
    tertiary: blue,
  },
});
export default theme;
