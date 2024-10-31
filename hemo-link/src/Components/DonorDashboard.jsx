import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
  useDisclosure,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import DonorCard from "./DonorCard";
import getCampaings from "../api/getCampaings";

function DonorDashboard() {
  const [allCampaings, setCampaings] = useState([]);
  useEffect(() => {
    const handleCampaingsRequest = async () => {
      const campaings = await getCampaings();
      if (campaings) {
        setCampaings(campaings);
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
          {allCampaings.map((campaing, index) => (
            <GridItem>
              <DonorCard key={index} props={campaing} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}

export default DonorDashboard;
