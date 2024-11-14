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
import SubscribedDonorsCard from "./SubscribedDonnorsCard";

function SubscribedDonors(){
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
              gap={["5", "10", "10"]}
            >
                <GridItem>
                    <SubscribedDonorsCard />
                    
                </GridItem>
                <GridItem>
                    <SubscribedDonorsCard />
                   
                </GridItem>
                <GridItem>
                    <SubscribedDonorsCard />
                    
                </GridItem>
                <GridItem>
                    <SubscribedDonorsCard />
                    
                </GridItem>
              {/* {true &&
                allCampaings.map((campaing, index) => (
                  
                ))} */}
            </Grid>
          {/* </Flex>
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
          } */}

          </Flex>
        </>
      );
}

export default SubscribedDonors;