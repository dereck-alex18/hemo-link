import { getAuthenticationStatus } from "../helpers/handleAuthentication";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isDonor }) => {
    const { isAuthenticated, userType } = getAuthenticationStatus();
    const redirectUrl = isDonor ? "/login-doador" : "/login-clinica";
    if(!isAuthenticated){
       return <Navigate to={redirectUrl} />
    }

    if((isDonor && userType !== 'donor') || (!isDonor && userType !== 'clinic')){
        const redirectPath = userType === 'donor' ? '/dashboard-doador' : '/dashboard-clinica';
        return <Navigate to={redirectPath} />
    } 

    return <Outlet />
}

export default PrivateRoute;

