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
              <Route path="/login-doador" element={ <Login loginType={ "Login do Doador" }/> }/>
              <Route path="/login-clinica" element={ <Login loginType={ "Login da Clinica" }/> }/>
              {/* <Route path="/" element={ <Header/> }/> */}

          </Routes>
          </Router>
        
      </ChakraProvider>
    </>
  )
}

export default App
