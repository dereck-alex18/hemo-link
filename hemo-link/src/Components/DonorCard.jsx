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
} from "@chakra-ui/react";
import { PiHeartbeat } from "react-icons/pi";
import { motion } from "framer-motion";
import moment from 'moment';
import 'moment/locale/pt';

const MotionBox = motion(Box);


function DonorCard({ props }) {
  const popoverTrigger = useBreakpointValue({
    base: "click",
    lg: "hover",
  });

 

  const convertToReadableDate = (date) =>{ 
    moment.locale('pt');
    return moment(date).format('DD/MM/YYYY')
  };

  return (
    <>
      <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Card bgColor="hemoSecondary" p="5" color="hemoTerciary" maxW="sm">
          <CardHeader>
            <Heading size="md">Clinica de Doação de sangue do Recife </Heading>
            
            <Popover trigger={popoverTrigger} placement="top">
              <PopoverTrigger>
                
                <Text mt={3} noOfLines={2} as="b" cursor="pointer">
                {/* <Heading size="md">{props.title} </Heading> */}
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
              Data inicial: <Text as="b">{convertToReadableDate(props.startDate)}</Text>
            </Text>
            <Text mb="1">
              Data final: <Text as="b">{convertToReadableDate(props.endDate)}</Text>
            </Text>
            <Text mb="1">
              CEP: <Text as="b">{props.cep}</Text>
            </Text>
            <Text mb="1">
              Cidade: <Text as="b">{props.city}</Text>
            </Text>
            <Text mb="1">
              Estado: <Text as="b">{props.state}</Text>
            </Text>
            <Text mb="1">
              Região: <Text as="b">{props.region}</Text>
            </Text>
          </CardBody>

          <Flex justify="center" align="center" gap={2}>
            <CardFooter>
              <Button type="submit" color="textInput">
                Quero Doar
                <Box alignSelf="center" ml={1} color="hemoSecondary">
                  <PiHeartbeat />
                </Box>
              </Button>
            </CardFooter>
          </Flex>
        </Card>
      </MotionBox>
    </>
  );
}

export default DonorCard;
