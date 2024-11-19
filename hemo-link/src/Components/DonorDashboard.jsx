import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Grid,
  GridItem,
  Spinner,
  Heading,
  Box,
} from "@chakra-ui/react";
import CampaignCard from "./CampaignCard";
import { getCampaigns } from "../api/campaigns";
import { getAllLocalStorageItems } from "../helpers/handleAuthentication";
import { getDonorCampaignId } from "../api/donor";
import { getClinic } from "../api/clinic";
import CustomDivider from "./CustomDivider";

function DonorDashboard() {
  const [allCampaings, setCampaings] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const id = getAllLocalStorageItems().id;

  const getClinicNames = (clinics, campaignId) => {
    for (let clinic of clinics) {
      if (clinic.id == campaignId) {
        return clinic;
      }
    }
  };

  useEffect(() => {
    const handleCampaingsRequest = async () => {
      setIsFetching(true);
      const donorCampaign = await getDonorCampaignId(id);
      const campaings = await getCampaigns();
      const clinics = await getClinic();

      campaings.forEach(async (campaing) => {
        const { name, address } = getClinicNames(clinics, campaing.clinicId);
        campaing.clinicName = name;
        campaing.address = address;
      });

      let donorCampaignId;
      if (donorCampaign) {
        donorCampaignId = donorCampaign.user.campaignId;
      }
      if (campaings) {
        campaings.forEach((campaing) => {
          if (campaing.id == donorCampaignId) {
            campaing.donorCampaignId = donorCampaignId;
          }
        });
        const sortedCampaigns = campaings.sort((a, b) => {
          return new Date(a.startDate) - new Date(b.startDate);
        });

        setCampaings(sortedCampaigns);
        setIsFetching(false);
      }
    };

    handleCampaingsRequest();
  }, []);

  return (
    <>
      {allCampaings.length > 0 && (
        <>
          <Heading
            textAlign="center"
            color="textInput"
            size={["xl", "xl", "2xl", "2xl"]}
            mt={10}
            mb={15}
          >
            Campanhas Ativas
          </Heading>
          <CustomDivider />
          <Flex
            justify="center"
            mt={["5", "5", "10", "10"]}
            mb={["5", "5", "10", "10"]}
            bg="hemoTerciary"
            width={["100%", "100%", "80%", "80%"]}
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
              gap={["5", "10", "10", "20"]}
            >
              {allCampaings.map((campaing, index) => (
                <GridItem>
                  <CampaignCard key={index} props={campaing} />
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

      {allCampaings.length === 0 && !isFetching && (
        <Flex
          h="80vh"
          justify="center"
          flexDirection="column"
          align="center"
          color="textInput"
        >
          <Text fontSize={["lg", "xl", "3xl", "3xl"]}>
            Ainda não tem campanhas disponíveis.
          </Text>
          <Text fontSize={["lg", "xl", "3xl", "3xl"]}>
            Nós mostraremos aqui assim tiver.
          </Text>
        </Flex>
      )}
    </>
  );
}

export default DonorDashboard;
