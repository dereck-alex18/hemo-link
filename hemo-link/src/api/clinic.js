import { baseUrl } from "../helpers/constants";

export const getClinic = async() => {
    try{
      //  console.log(id);
        const response = await fetch(`${baseUrl}/clinics`);
        return await response.json();
    }catch(e){
        throw e
    }
}