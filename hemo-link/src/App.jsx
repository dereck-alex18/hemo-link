import Header from "./Components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivateRoute from "./Components/PrivateRoute";
import DonorDashboard from "./Components/DonorDashboard";
import ClinicDashboardCard from "./Components/ClinicDashboardCard";
import SubscribedDonors from "./Components/SubscribedDonors";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<LandingPage title="Home" />} />

            {/* Login Routes */}
            <Route
              path="/login-doador"
              element={<Login loginType={"Login do Doador"} isDonor={true} />}
            />
            <Route
              path="/login-clinica"
              element={<Login loginType={"Login da Clínica"} isDonor={false} />}
            />

            {/* Register Routes */}
            <Route
              path="/cadastro-doador"
              element={
                <Register title={"Cadastro do Doador"} isDonor={true} />
              }
            />
            <Route
              path="/cadastro-clinica"
              element={
                <Register title={"Cadastro da Clínica"} isDonor={false} />
              }
            />

            {/* Donor Dashboard */}
            <Route
              path="/dashboard-doador"
              element={<PrivateRoute isDonor={true} />}
            >
              <Route
                path=""
                element={<DonorDashboard title={"Dashboard do Doador"} />}
              />
            </Route>

            {/* Clinic Dashboard */}
            <Route
              path="/dashboard-clinica"
              element={<PrivateRoute isDonor={false} />}
            >
              <Route
                path=""
                element={
                  <ClinicDashboardCard title={"Dashboard da Clínica"} />
                }
              />
              <Route
                path="/dashboard-clinica/doadores-inscritos"
                element={
                  <SubscribedDonors title={"Doadores Inscritos"} />
                }
              />
            </Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
