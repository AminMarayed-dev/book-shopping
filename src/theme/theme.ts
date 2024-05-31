import { createTheme } from "@mui/material";
import "@fontsource/vazir";

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: [
      "Vazir",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
