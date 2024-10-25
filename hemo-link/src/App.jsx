import Header from "./Components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivateRoute from "./Components/PrivateRoute";
import DonorDashboard from "./Components/DonorDashboard";
import ClinicDashboard from "./Components/ClinicDashboard";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/login-doador"
              element={<Login loginType={"Login do Doador"} isDonor={true} />}
            />
            <Route
              path="/login-clinica"
              element={<Login loginType={"Login da Clinica"} isDonor={false} />}
            />
            <Route
              path="/cadastro-doador"
              element={
                <Register title={" Cadastro do Doador "} isDonor={true} />
              }
            />
            <Route
              path="/cadastro-clinica"
              element={
                <Register title={" Cadastro da Clinica "} isDonor={false} />
              }
            />
            <Route
              path="/dashboard-doador"
              element={<PrivateRoute isDonor={true} />}
            >
              <Route path="" element={<DonorDashboard />} />
            </Route>

            <Route
              path="/dashboard-clinica"
              element={<PrivateRoute isDonor={false} />}
            >
              <Route path="" element={<ClinicDashboard />} />
            </Route>
            {/* <Route path="/" element={ <Header/> }/> */}
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
