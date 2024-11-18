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
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { PiHeartbeat } from "react-icons/pi";
import { motion } from "framer-motion";
import moment from 'moment';
import 'moment/locale/pt';
import React, { useState } from "react";

const MotionBox = motion(Box);

function DonorCard({ props }) {
  const popoverTrigger = useBreakpointValue({
    base: "click",
    lg: "hover",
  });

  const [lastDonation, setLastDonation] = useState("");
  const [gender, setGender] = useState("");
  const [donationType, setDonationType] = useState("");
  const [nextDonationDate, setNextDonationDate] = useState(null);

  const handleCalculateNextDonation = () => {
    let intervalDays;
    if (donationType === "sangue total") {
      intervalDays = gender === "masculino" ? 60 : 90;
    } else if (donationType === "plaquetas") {
      intervalDays = 30;
    } else if (donationType === "plasma") {
      intervalDays = 15;
    }

    if (lastDonation) {
      const nextDate = moment(lastDonation).add(intervalDays, "days").format("DD/MM/YYYY");
      setNextDonationDate(nextDate);
    }
  };

  const convertToReadableDate = (date) => {
    moment.locale('pt');
    return moment(date).format('DD/MM/YYYY');
  };

  const handleChangeDescription = (newDescription) => {
    props.updateClinic(props.id, { description: newDescription }); // atualiza a descrição da clínica
  };

  return (
    <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Card
        bgColor="#FEE2E2" // Tom de vermelho claro
        p={4} // Ajustando padding
        color="#9B2C2C" // Texto com vermelho mais escuro
        maxW={{ base: "90%", sm: "80%", md: "400px" }} // Responsividade com maxWidth ajustado
        boxShadow="lg"
        borderRadius="md"
        m={4} // Margens ajustadas para maior responsividade
      >
        <CardHeader>
          <Heading size="md" fontSize={{ base: "lg", md: "xl" }} textAlign="center">
            {props.description} {/* Mostrando a descrição passada como prop */}
          </Heading>

          <Popover trigger={popoverTrigger} placement="top">
            <PopoverTrigger>
              <Text mt={3} noOfLines={2} as="b" cursor="pointer" color="#9B2C2C" onClick={() => handleChangeDescription("Nova descrição aqui")}>
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
          <VStack align="flex-start" spacing={2}>
            <Text>
              Data inicial: <Text as="b">{convertToReadableDate(props.startDate)}</Text>
            </Text>
            <Text>
              Data final: <Text as="b">{convertToReadableDate(props.endDate)}</Text>
            </Text>
            <Text>
              CEP: <Text as="b">{props.cep}</Text>
            </Text>
            <Text>
              Cidade: <Text as="b">{props.city}</Text>
            </Text>
            <Text>
              Estado: <Text as="b">{props.state}</Text>
            </Text>
            <Text>
              Região: <Text as="b">{props.region}</Text>
            </Text>

            {/* Seção de "Já posso doar novamente?" */}
            <Box mt={4} p={4} bg="red.50" borderRadius="md" boxShadow="md">
              <Flex direction="column" align="center"> {}
                <Heading as="h2" size="md" mb={3} color="#C53030" textAlign="center">
                  Já posso doar novamente?
                </Heading>

                <VStack spacing={3} align="stretch" w="full"> {}
                  <FormControl>
                    <FormLabel color="#9B2C2C">Data da última doação</FormLabel>
                    <Input
                      type="date"
                      value={lastDonation}
                      onChange={(e) => setLastDonation(e.target.value)}
                      bg="white"
                      color="black"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="#9B2C2C">Gênero</FormLabel>
                    <Select
                      placeholder="Selecione o gênero"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      bg="white"
                      color="black"
                    >
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel color="#9B2C2C">Tipo de doação anterior</FormLabel>
                    <Select
                      placeholder="Selecione o tipo de doação"
                      value={donationType}
                      onChange={(e) => setDonationType(e.target.value)}
                      bg="white"
                      color="black"
                    >
                      <option value="sangue total">Sangue Total</option>
                      <option value="plaquetas">Plaquetas</option>
                      <option value="plasma">Plasma</option>
                    </Select>
                  </FormControl>

                  <Button colorScheme="red" w="full" onClick={handleCalculateNextDonation}>
                    Calcular próxima doação
                  </Button>

                  {nextDonationDate && (
                    <Text mt={2} fontWeight="bold" color="#C53030" textAlign="center">
                      Você poderá doar novamente a partir de: {nextDonationDate}
                    </Text>
                  )}
                </VStack>
              </Flex>
            </Box>
          </VStack>
        </CardBody>

        <CardFooter>
          <Flex justify="center" align="center" w="full"> {/* Centralizando o botão */}
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              borderRadius="md"
              boxShadow="md"
              w="full" 
            >
              Quero Doar
              <Box alignSelf="center" ml={2}>
                <PiHeartbeat />
              </Box>
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </MotionBox>
  );
}

export default DonorCard;
