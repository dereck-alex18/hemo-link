import { baseUrl } from "../helpers/constants";

export const getCampaigns = async() => {
    try{
        const response = await fetch(`${baseUrl}/campaigns`);

        return await response.json();
    } catch(error){
        throw error;  
    }
}

export const createCampaign = async(campaignData) => {
    try{
        const response = await fetch(`${baseUrl}/campaigns`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(campaignData), 
        });
        return await response.json();
    } catch(error){
        throw error;  
    }
}