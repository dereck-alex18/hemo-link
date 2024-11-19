import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Grid,
  GridItem,
  Spinner,
  Heading,
  Button,
  Box,
} from "@chakra-ui/react";
import SubscribedDonorsCard from "./SubscribedDonnorsCard";
import { getAllDonors } from "../api/donor";
import { getAllLocalStorageItems } from "../helpers/handleAuthentication";
import CustomDivider from "./CustomDivider";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

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
      {donorsSubscribed.length > 0 && (
        <>
          <Flex justify="flex-start" align="center">
            <Link color="textInput" to="/dashboard-clinica">
              <Button
                m={2}
                fontSize="4xl"
                bg="transparent"
                _hover={{ bgColor: "transparent" }}
                color="hemoButton"
              >
                <MotionBox
                  whileHover={{ x: -10 }} 
                  transition={{ duration: 0.2 }} 
                >
                  <IoChevronBack />
                </MotionBox>
              </Button>
            </Link>
          </Flex>
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
            maxWidth={["100%", "100%", "80%", "80%"]}
            m="auto"
            p={10}
            boxShadow="xl"
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
              {donorsSubscribed.map((donorSubscribed, index) => (
                <GridItem>
                  <SubscribedDonorsCard key={index} props={donorSubscribed} />
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </>
      )}
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

      {donorsSubscribed.length === 0 && !isFetching && (
        <Flex
          h="80vh"
          justify="center"
          flexDirection="column"
          align="center"
          color="textInput"
        >
          <Text fontSize={["lg", "xl", "3xl", "3xl"]}>
            Ainda não tem campanhas doadores cadastrados.
          </Text>
          <Text fontSize={["lg", "xl", "3xl", "3xl"]}>
            Nós mostraremos aqui assim tiver.
          </Text>
        </Flex>
      )}
    </>
  );
}

export default SubscribedDonors;
