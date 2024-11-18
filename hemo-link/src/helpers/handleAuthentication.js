

export const loginTokenHandling = (loginData, isDonor) => {
    const userType = isDonor ? 'donor' : 'clinic';
    if(loginData.access_token){
      localStorage.setItem('jwtToken', loginData.access_token);
      localStorage.setItem('userType', userType);
    }
  }

export const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
}
      
  export const getAuthenticationStatus = () => {
    const isAuthenticated = !!localStorage.getItem('jwtToken');
    const userType = localStorage.getItem('userType');
    return {
        isAuthenticated,
        userType,
    }
  }

      
  