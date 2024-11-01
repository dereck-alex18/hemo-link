import Header from "./Components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import LandingPage from "./Components/LandingPage";
import DoadorPage from "./Components/DoadorPage";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login-doador" element={<Login loginType={"Login do Doador"} isDonor={true} />} />
            <Route path="/login-clinica" element={<Login loginType={"Login da Clinica"} />} />
            <Route path="/cadastro-doador" element={<Register title={"Cadastro do Doador"} isDonor={true} />} />
            <Route path="/cadastro-clinica" element={<Register title={"Cadastro da Clinica"} isDonor={false} />} />
            <Route path="/doador" element={<DoadorPage />} /> {/* Rota para a página DoadorPage */}
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
