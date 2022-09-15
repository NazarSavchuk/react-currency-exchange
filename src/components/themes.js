import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#37474f",
      darker: "#053e85",
    },
    neutral: {
      main: "#eceff1",
      contrastText: "#37474f",
    },
  },
});
