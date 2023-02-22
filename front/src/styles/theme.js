import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#DCFC73",
    },
    thirdly: {
      main: "#939393",
    },
  },
  typography: {
    fontFamily: "AppleSDGothicNeo",
    h1: { fontSize: "2.5rem" },
    h2: { fontSize: "2.00rem" },
    h3: { fontSize: "1.75rem" },
    h4: { fontSize: "1.63rem" },
    h5: { fontSize: "1.50rem" },
    subtitle1: { fontSize: "1.38rem" },
    subtitle2: { fontSize: "1.25rem" },
    body1: { fontSize: "1.13rem" },
    body2: { fontSize: "1.00rem" },
  },
});

export default theme;
