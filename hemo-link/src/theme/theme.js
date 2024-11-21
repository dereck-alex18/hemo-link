import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    hemoPrimary: "#ededed",
    hemoPrimaryDisabled: "#d3363685",
    hemoSecondary: "#930c0c",
    hemoPrimaryHover: "#c0c0c0",
    headerColor: "#b50000",
    textInput: "#4a4a4a",
    hemoButton: "#ef5350", 
    hemoButtonDisabled: "#cacaca",
    hemoTerciary: "#fafafa",
    hemoSuccess: "#4BB543",
    hemoCardBackground: "#f9d3d3",
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        bg: "#ededed",
        color: "gray.800",
      },
    },
  },
});

export default theme;