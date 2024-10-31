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

const MotionBox = motion(Box);

function DonorCard(props) {
  const popoverTrigger = useBreakpointValue({
    base: "click",
    lg: "hover",
  });
  return (
    <>
      <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Card bgColor="hemoSecondary" p="5" color="hemoTerciary" maxW="sm">
          <CardHeader>
            <Heading size="md">Clinica de Doação de sangue do Recife </Heading>
            <Popover trigger={popoverTrigger} placement="top">
              <PopoverTrigger>
                <Text mt={3} noOfLines={2} as="b" cursor="pointer">
                  Estamos fazendo doação para repor o estoque de sangue para o
                  carnaval
                </Text>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody>
                  <Text color="textInput">
                    Estamos fazendo doação para repor o estoque de sangue para o
                    carnaval
                  </Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </CardHeader>

          <Divider />

          <CardBody>
            <Text mb="1">
              Data inicial: <Text as="b">31 de Outubro de 2024</Text>
            </Text>
            <Text mb="1">
              Data final: <Text as="b">30 de Novembro de 2024</Text>
            </Text>
            <Text mb="1">
              CEP: <Text as="b">53130410</Text>
            </Text>
            <Text mb="1">
              Cidade: <Text as="b">Recife</Text>
            </Text>
            <Text mb="1">
              Estado: <Text as="b">Pernambuco</Text>
            </Text>
            <Text mb="1">
              Região: <Text as="b">Região metropolitana do Recife</Text>
            </Text>
          </CardBody>

          <Flex justify="center" alingItems="center" gap={2}>
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
