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
} from "@chakra-ui/react";

import { PiHeartbeat } from "react-icons/pi";
import { motion } from "framer-motion";
import moment from "moment";
import "moment/locale/pt";

const MotionBox = motion(Box);

function SubscribedDonorsCard() {
  return (
    <>
      <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Card bgColor="hemoSecondary" p="5" color="hemoTerciary" maxW="sm">
          <CardHeader>
            <Flex align="center" justify="center">
            <Heading size="md">
            <Avatar
                  name="Dereck Portela"
                  size="lg"
                  color="hemoSecondary"
                  backgroundColor="hemoPrimary"
                />
            </Heading>
            </Flex>

            {/* <Text mt={3} noOfLines={2} as="b" cursor="pointer"> */}
            {/* <Heading size="md">{props.title} </Heading> */}

            {/* </Text> */}
          </CardHeader>

          <Divider />

          <CardBody>
            <Text mb="1">
              Nome: <Text as="b">Dereck Portela</Text>
            </Text>
            <Text mb="1">
              Email:
              <Text as="b"> dereck.port@test.com</Text>
            </Text>
            <Text mb="1">
              Telefone: <Text as="b"> 81999999999</Text>
            </Text>
            <Text mb="1">
              Cidade: <Text as="b">Recife</Text>
            </Text>
            <Text mb="1">
              Estado: <Text as="b">Pernambuco</Text>
            </Text>
            <Text mb="1">
              Região: <Text as="b">Região Metropolitana do Recife</Text>
            </Text>
          </CardBody>

          {/* <Flex justify="center" align="center" gap={2}>
            <CardFooter>
              <Button type="submit" color="textInput">
                Quero Doar
                <Box alignSelf="center" ml={1} color="hemoSecondary">
                  <PiHeartbeat />
                </Box>
              </Button>
            </CardFooter>
          </Flex> */}
        </Card>
      </MotionBox>
    </>
  );
}

export default SubscribedDonorsCard;
