import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Grid,
  GridItem,
  Spinner,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import CampaignCard from "./CampaignCard";
import { getCampaigns } from "../api/campaigns";
import { getAllLocalStorageItems } from "../helpers/handleAuthentication";
import { getDonorCampaignId } from "../api/donor";
import { getClinic } from "../api/clinic";
import CustomDivider from "./CustomDivider";
import { useDocumentTitle } from "./UseDocumentTitle";
import ReactPaginate from "react-paginate";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion(Box);

function DonorDashboard({ title }) {
  const [allCampaings, setCampaings] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [subscribedCampaigns, setSubscribedCampaigns] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [subscribedCampaignId, setSubscribedCampaignId] = useState(null);
  const id = getAllLocalStorageItems().id;
  const itemsPerPage = 3;

  const getClinicNames = (clinics, campaignId) => {
    for (let clinic of clinics) {
      if (clinic.id == campaignId) {
        return clinic;
      }
    }
  };

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setCurrentItems(allCampaings.slice(newOffset, newOffset + itemsPerPage));
  };

  const handleDonorSubscription = (campaignId) => {
    setSubscribedCampaigns((prevState) => ({
      ...prevState,
      [campaignId]: true,
    }));
    setSubscribedCampaignId(campaignId);
  };

  const cancelSubscription = (campaignId) => {
    setSubscribedCampaigns((prevState) => ({
      ...prevState,
      [campaignId]: false,
    }));
    setSubscribedCampaignId(null);
  };

  useDocumentTitle(title);
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
        setSubscribedCampaignId(donorCampaignId);
      }
      if (campaings) {
        campaings.forEach((campaing) => {
          if (campaing.id == donorCampaignId) {
            campaing.donorCampaignId = donorCampaignId;
            handleDonorSubscription(donorCampaignId);
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

  useEffect(() => {
    setPageCount(Math.ceil(allCampaings.length / itemsPerPage));
    setCurrentItems(allCampaings.slice(0, itemsPerPage));
  }, [allCampaings]);

  return (
    <>
      {allCampaings.length > 0 && (
        <>
          <Heading
            textAlign="center"
            color="textInput"
            size={["xl", "xl", "2xl", "2xl"]}
            mt={5}
            mb={15}
          >
            Campanhas Ativas
          </Heading>
          <CustomDivider />
          <MotionBox
          key={subscribedCampaignId}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
          <Heading
            
            size="md"
            mt={3}
            textAlign="center"
            bgColor={subscribedCampaignId ? "hemoSuccess" : "headerColor"}
            color="hemoTerciary"
            minW="300px"
            maxWidth="600px"
            margin="10px auto"
            rounded={["sm", "sm", "md"]}
            p={2}
            boxShadow="dark-lg"
          >
            {subscribedCampaignId
              ? "Voce esta inscrito em uma campanha."
              : "Se inscreva em uma campanha para salvar vidas!"}
          </Heading>
          </MotionBox>
          <Flex
            justify="center"
            mt={["5", "5", "7", "7"]}
            mb={["5", "5", "8", "8"]}
            bg="hemoCardBackground"
            width="100%"
            maxWidth="1400px"
            m="auto"
            p={10}
            boxShadow="xl"
            borderRadius="md"
          >
            <AnimatePresence mode="wait">
              <MotionBox
                key={currentItems.map((item) => item.id).join("-")}
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                exit={{ rotateY: -90 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Grid
                  templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(3, 1fr)",
                  ]}
                  gap={["5", "10", "10", "10"]}
                >
                  {currentItems.map((campaing) => (
                    <GridItem>
                      <CampaignCard
                        key={campaing.id}
                        props={campaing}
                        isSubscribed={subscribedCampaigns[campaing.id] || false}
                        onSubscribe={handleDonorSubscription}
                        onCancel={cancelSubscription}
                        subscribedCampaignId={subscribedCampaignId}
                      />
                    </GridItem>
                  ))}
                </Grid>
              </MotionBox>
            </AnimatePresence>
          </Flex>

          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <Button
                bgColor="hemoSecondary"
                color="hemoPrimary"
                fontSize="xl"
                _hover={{
                  bg: "hemoCardBackground",
                  color: "hemoSecondary",
                }}
              >
                <GrCaretNext />
              </Button>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={
              <Button
                bgColor="hemoSecondary"
                color="hemoPrimary"
                fontSize="xl"
                _hover={{
                  bgColor: "hemoCardBackground",
                  color: "hemoSecondary",
                }}
              >
                <GrCaretPrevious />
              </Button>
            }
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="pagination-item"
            pageLinkClassName="pagination-link"
          />
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
