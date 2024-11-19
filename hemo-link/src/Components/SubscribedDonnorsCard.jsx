import {
  Avatar,
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
  Link,
} from "@chakra-ui/react";

import { PiHeartbeat } from "react-icons/pi";
import { motion } from "framer-motion";
import "moment/locale/pt";
import { LogosWhatsappIcon } from "../assets/Icons/WhatsappIcon";
import whatsappUrlFormatting from "../helpers/whatsappUrlFormatting";
import { useState } from "react";

const MotionBox = motion(Box);

function SubscribedDonorsCard({ props }) {
  const popoverTrigger = useBreakpointValue({
    base: "click",
    lg: "hover",
  });
  const[sanatizedNumber, setSanatizedNumber] = useState("");

  const sanitizePhoneNumber = (phoneNumber) => {
    setSanatizedNumber(phoneNumber.replace(/[()-]/g, ""));
  }
    

  return (
    <>
      <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Card bgColor="hemoSecondary" p="5" color="hemoTerciary" maxW="sm">
          <CardHeader>
            <Flex align="center" justify="center" direction="column">
              <Heading size="md">
                <Avatar
                  name={props.name}
                  size="lg"
                  color="hemoSecondary"
                  backgroundColor="hemoPrimary"
                />
              </Heading>

              <Popover trigger={popoverTrigger} placement="top">
                <PopoverTrigger>
                  <Heading size="sm" mt={3} noOfLines={2} cursor="pointer">
                    {props.campaign.title}
                  </Heading>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverBody>
                    <Text color="textInput"> {props.campaign.title}</Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </CardHeader>

          <Divider />

          <CardBody>
            <Text mb="1">
              Nome: <Text as="b">{props.name}</Text>
            </Text>
            <Text mb="1">
              Email:
              <Text as="b"> {props.email}</Text>
            </Text>
            <Text mb="1">
              Telefone: <Text as="b"> {props.phone}</Text>
            </Text>
            <Text mb="1">
              Cidade:{" "}
              <Text as="b">
                {props.city} ({props.state})
              </Text>
            </Text>
            <Text mb="1">
              Tipo Sanguíneo: <Text as="b">{props.bloodType}</Text>
            </Text>
          </CardBody>

          <Flex justify="center" align="center" gap={2}>
            <CardFooter>
              <Link
                href={whatsappUrlFormatting(
                    sanatizedNumber,
                    props.name,
                    props.campaign.title
                  
                )}
                color="textInput"
                isExternal
                textDecor="none"
              >
                <Button onClick={() => sanitizePhoneNumber(props.phone)} rightIcon={<LogosWhatsappIcon />}>
                  Entrar em contato
                </Button>
              </Link>
            </CardFooter>
          </Flex>
        </Card>
      </MotionBox>
    </>
  );
}

export default SubscribedDonorsCard;
