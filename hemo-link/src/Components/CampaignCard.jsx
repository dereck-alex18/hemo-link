import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { PiHeartbeat } from "react-icons/pi";
import { motion } from "framer-motion";
import moment from "moment";
import "moment/locale/pt";
import { getAllLocalStorageItems } from "../helpers/handleAuthentication";
import {
  subscribeDonorToCampaign,
  cancelDonorSubscription,
} from "../api/donor";
import { useState } from "react";

const MotionBox = motion(Box);

function CampaignCard({ props }) {
  const [isFetching, setIsFetching] = useState(false);
  const [campaignId, setCampaignId] = useState(props.donorCampaignId);
  const [isSubscribed, setSubscribed] = useState(campaignId ? "green" : "hemoSecondary");
  const toast = useToast();
  const id = getAllLocalStorageItems().id;
  const popoverTrigger = useBreakpointValue({
    base: "click",
    lg: "hover",
  });

  const convertToReadableDate = (date) => {
    moment.locale("pt");
    return moment(date).format("DD/MM/YYYY");
  };

  const handleDonorSubscription = async (campaignId) => {
   
    setIsFetching(true);
    const donorAndCampaignIds = {
      id,
      campaignId,
    };
    try {
      const response = await subscribeDonorToCampaign(donorAndCampaignIds);
      if (response.id) {
        setCampaignId(response.campaignId);
        setSubscribed("green");
        toast({
          title: "Inscrição realizada com sucesso!",
          description: "Agora é só aguardar o contato da clinica.",
          status: "success",
          position: "bottom-left",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Inscrição não realizada!",
          description: `${response.message}`,
          status: "error",
          position: "bottom-left",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: "Algo deu errado!",
        description: "Por favor, tente novamente mais tarde.",
        position: "bottom-left",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setIsFetching(false);
    }
  };

  const cancelSubscription = async () => {
    setIsFetching(true);

    try {
      const response = await cancelDonorSubscription(id);
      if (response.id) {
        setCampaignId(null);
        setSubscribed("hemoSecondary");
        toast({
          title: "Inscrição cancelada com sucesso!",
          description: "Agora você pode se inscrever em outra campanha",
          status: "success",
          position: "bottom-left",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Inscrição não realizada!",
          description: `${response.message}`,
          status: "error",
          position: "bottom-left",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: "Algo deu errado!",
        description: "Por favor, tente novamente mais tarde.",
        position: "bottom-left",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Card bgColor={isSubscribed} p="5" color="hemoTerciary" maxW="sm">
          <CardHeader>
            <Heading size="lg" textAlign="center">{props.clinicName} </Heading>

            <Popover trigger={popoverTrigger} placement="top">
              <PopoverTrigger>
                <Text mt={3} noOfLines={2} as="b" cursor="pointer">
                  <Heading size="md">{props.title} </Heading>
                  {props.description}
                </Text>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody>
                  <Text color="textInput">{props.description}</Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </CardHeader>

          <Divider />

          <CardBody>
            <Text mb="1">
              Data inicial:{" "}
              <Text as="b">{convertToReadableDate(props.startDate)}</Text>
            </Text>
            <Text mb="1">
              Data final:{" "}
              <Text as="b">{convertToReadableDate(props.endDate)}</Text>
            </Text>
            <Text mb="1">
              Cidade: <Text as="b">{props.city} ({props.state})</Text>
            </Text>
            <Text mb="1">
              Horário: <Text as="b">08:00 às 17:00</Text>
            </Text>
            <Text mb="1">
              Endereço: <Text as="b">{props.address}</Text>
            </Text>
          </CardBody>

          <Flex justify="center" align="center" gap={2}>
            <CardFooter>
              {campaignId != props.id ? (
                <Button
                  type="submit"
                  color="textInput"
                  onClick={() => handleDonorSubscription(props.id)}
                  isLoading={isFetching}
                >
                  Quero Doar
                  <Box alignSelf="center" ml={1} color="hemoSecondary">
                    <PiHeartbeat />
                  </Box>
                </Button>
              ) : (
                <Button
                  type="submit"
                  color="textInput"
                  onClick={cancelSubscription}
                  isLoading={isFetching}
                >
                  Cancelar
                  <Box alignSelf="center" ml={1} color="hemoSecondary">
                    <PiHeartbeat />
                  </Box>
                </Button>
              )}
            </CardFooter>
          </Flex>
        </Card>
      </MotionBox>
    </>
  );
}

export default CampaignCard;
