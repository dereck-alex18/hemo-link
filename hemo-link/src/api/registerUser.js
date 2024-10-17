import  { baseUrl }  from "../helpers/constants";

export default async (userData) => {    
    try{
        const response = await fetch(`${baseUrl}/donors`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}