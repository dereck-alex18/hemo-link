import Header from "./Components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

function App() {
  return (
    <>
      <ChakraProvider theme={ theme }>
        <Header/>
      </ChakraProvider>
    </>
  )
}

export default App
