import { baseUrl } from "../helpers/constants";

export const subscribeDonorToCampaign = async({ id, campaignId }) => {
    try{
        console.log(campaignId);
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