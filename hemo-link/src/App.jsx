import Header from "./Components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";

function App() {
  return (
    <>
      <ChakraProvider theme={ theme }>
      
        <Router>
        <Header/>
          <Routes>
              <Route path="/login" element={ <Login/> }/>
              {/* <Route path="/" element={ <Header/> }/> */}

          </Routes>
          </Router>
        
      </ChakraProvider>
    </>
  )
}

export default App
