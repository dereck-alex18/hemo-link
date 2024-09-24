import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    hemoPrimary: "#D33636",
    hemoPrimaryHover: "#e75252",
    headerColor: "#D9D9D9", 
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