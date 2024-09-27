import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    hemoPrimary: "#d33636",
    hemoPrimaryDisabled: "#d3363685",
    hemoSecondary: "#ededed",
    hemoPrimaryHover: "#e75252",
    headerColor: "#d9d9d9",
    textInput: "#4a4a4a",
    hemoButton: "#ef5350", 
    hemoButtonDisabled: "#cacaca",
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        bg: "#D33636",
        color: "gray.800",
      },
    },
  },
});

export default theme;