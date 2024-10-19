import  { baseUrl }  from "../helpers/constants";

export default async (userData, isDonor) => {    
    const endpoint = isDonor ? 'donors' : 'clinics';

    try{
        const response = await fetch(`${baseUrl}/${endpoint}`, {
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