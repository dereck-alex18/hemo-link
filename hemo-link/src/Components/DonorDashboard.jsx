import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Grid,
  GridItem,
  Spinner
} from "@chakra-ui/react";
import DonorCard from "./DonorCard";
import {getCampaigns} from "../api/campaigns";

function DonorDashboard() {
  const [allCampaings, setCampaings] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const handleCampaingsRequest = async () => {
      setIsFetching(true);
      const campaings = await getCampaigns();
      if (campaings) {
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
                <DonorCard key={index} props={campaing} />
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
