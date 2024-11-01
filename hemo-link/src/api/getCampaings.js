import { baseUrl } from "../helpers/constants";

export default async() => {
    try{
        const response = await fetch(`${baseUrl}/campaigns`);

        return await response.json();
    } catch(error){
        throw error;  
    }
}