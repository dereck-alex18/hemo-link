import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Grid,
  GridItem,
  Spinner
} from "@chakra-ui/react";
import CampaignCard from "./CampaignCard";
import {getCampaigns} from "../api/campaigns";
import { getAllLocalStorageItems } from "../helpers/handleAuthentication";
import {  getDonorCampaignId } from "../api/donor";

function DonorDashboard() {
  const [allCampaings, setCampaings] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const id = getAllLocalStorageItems().id;
  useEffect(() => {
    const handleCampaingsRequest = async () => {
      setIsFetching(true);
      const donorCampaign = await getDonorCampaignId(id);
      const campaings = await getCampaigns();
      let donorCampaignId;
      if( donorCampaign ){
        console.log("Entrei!")
        donorCampaignId = donorCampaign.user.campaignId;
      }
      if (campaings) {
        campaings.forEach((campaing) => {
          if(campaing.id == donorCampaignId){
            campaing.donorCampaignId = donorCampaignId;
          }
        })
        
        setCampaings(campaings);
        setIsFetching(false);
      }
    };

    handleCampaingsRequest();
  }, []);

  return (
    <>
      <Flex
        justify="center"
        mt={["5", "5", "10", "10"]}
        mb={["5", "5", "10", "10"]}
      >
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={["5", "10", "10", "20"]}
        >
          {allCampaings.length > 0 &&
            allCampaings.map((campaing, index) => (
              <GridItem>
                <CampaignCard key={index} props={campaing} />
              </GridItem>
            ))}
        </Grid>
      </Flex>
      {isFetching && (
        <Flex h="80vh" justify="center" align="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="hemoPrimary"
            color="hemoSecondary"
            size="xl"
          />
        </Flex>
      )}

      {allCampaings.length === 0 && !isFetching &&
        <Flex h="80vh" justify="center" flexDirection="column" align="center" color="textInput">
          <Text fontSize={["lg", "xl", "3xl", "3xl"]}>Ainda não tem campanhas disponíveis.</Text>  
          <Text fontSize={["lg", "xl", "3xl", "3xl"]}>Nós mostraremos aqui assim tiver.</Text>
      </Flex>
      }
    </>
  );
}

export default DonorDashboard;
