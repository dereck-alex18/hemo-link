import { baseUrl } from "../helpers/constants";

export const subscribeDonorToCampaign = async({ id, campaignId }) => {
    try{
        const response = await fetch(`${baseUrl}/donors/register/${id}/${campaignId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            }, 
        });

        return await response.json();
    } catch(error){
        throw error;  
    }
}

export const cancelDonorSubscription = async(id) => {
    try{
        const response = await fetch(`${baseUrl}/donors/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ campaignId: null }), 
        });

        return await response.json();
    } catch(error){
        throw error;  
    }
}

export const getDonorCampaignId = async(id) => {
    try{
        const response = await fetch(`${baseUrl}/donors/all/${id}`);
        const responseBody = await response.text();  

        
        if (!responseBody) {
            return false;
        }

        try {
            return JSON.parse(responseBody); 
        } catch (parseError) {
            return false;
        }
       
    } catch(error){
        throw error; 
        
    }
}

export const getAllDonors = async() => {
    try{
        const response = await fetch(`${baseUrl}/donors/all`);
        return await response.json();
    }catch(e){
        throw e
    }
}