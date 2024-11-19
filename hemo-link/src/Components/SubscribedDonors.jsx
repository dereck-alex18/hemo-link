import { useState, useEffect } from "react";
import { Flex, Text, Grid, GridItem, Spinner, Heading } from "@chakra-ui/react";
import SubscribedDonorsCard from "./SubscribedDonnorsCard";
import { getAllDonors } from "../api/donor";
import { getAllLocalStorageItems } from "../helpers/handleAuthentication";
import CustomDivider from "./CustomDivider";

function SubscribedDonors() {
  const [donorsSubscribed, setDonorsSubscribed] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const handleSubscribedDonors = async () => {
      setIsFetching(true);
      const donorsSubscribedAux = [];
      const campaignId = getAllLocalStorageItems().id;
      const allDonors = await getAllDonors();
      console.log(allDonors);
      allDonors.forEach((donor) => {
        if (donor.campaign && donor.campaign.Clinic.id === campaignId) {
          donorsSubscribedAux.push(donor);
        }
      });
      setDonorsSubscribed(donorsSubscribedAux);
      setIsFetching(false);
    };

    handleSubscribedDonors();
    
  }, []);

  return (
    <>
    
    <Heading
        textAlign="center"
        color="textInput"
        size={["xl", "xl", "2xl", "2xl"]}
        mt={10}
        mb={15}
      >
        Doadores Inscritos
      </Heading>

      <CustomDivider />

      <Flex
        justify="center"
        mt={["5", "5", "10", "10"]}
        mb={["5", "5", "10", "10"]}
        bg="hemoTerciary"
        maxWidth={["100%", "100%", "80%", "70%"]}
        m="auto"
        p={10}
        boxShadow='xl'
        borderRadius="md"
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
          {donorsSubscribed.length > 0 &&
            donorsSubscribed.map((donorSubscribed, index) => (
              <GridItem >
                <SubscribedDonorsCard key={index} props={donorSubscribed} />
              </GridItem>
            ))}
          
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
        </Grid>
        
          {donorsSubscribed.length === 0 && !isFetching &&
            <Flex h="80vh" justify="center" flexDirection="column" align="center" color="textInput">
              <Text fontSize={["lg", "xl", "3xl", "3xl"]}>Ainda não tem campanhas doadores cadastrados.</Text>  
              <Text fontSize={["lg", "xl", "3xl", "3xl"]}>Nós mostraremos aqui assim tiver.</Text>
          </Flex>
          } 
      </Flex>
    </>
  );
}

export default SubscribedDonors;
