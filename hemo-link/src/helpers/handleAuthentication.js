

export const loginTokenHandling = (loginData, isDonor) => {
    const userType = isDonor ? 'donor' : 'clinic';
    if(loginData.access_token){
      localStorage.setItem('jwtToken', loginData.access_token);
      localStorage.setItem('userType', userType);
      localStorage.setItem('id', loginData.id);
      localStorage.setItem('name', loginData.name);
      localStorage.setItem('email', loginData.email);
      if(isDonor){
        localStorage.setItem('cpf', loginData.cpf);
        localStorage.setItem('bloodType', loginData.bloodType);
      }
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

  export const getAllLocalStorageItems = () => {
    const allLocalStorageItems = {};
    for(let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      try {
        allLocalStorageItems[key] = JSON.parse(value);
      } catch (e) {
        allLocalStorageItems[key] = value; 
      }
    }
    
    return allLocalStorageItems;
  }

      
  