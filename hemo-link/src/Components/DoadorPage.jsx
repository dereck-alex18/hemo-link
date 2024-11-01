import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Icon,
  SimpleGrid,
  Heading,
  Input,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaFlask, FaTint, FaSearch, FaHeart, FaClock, FaInfoCircle } from "react-icons/fa";
import dayjs from "dayjs";

const locais = [
  {
    nome: "Hemope",
    endereco: "R. Joaquim Nabuco, 171, Graças, Recife - PE",
    cep: "52011-000",
    horario: "Todos os dias, das 07h às 18h (inclusive sábados, domingos e feriados)",
  },
  {
    nome: "Banco de Sangue Hemato",
    endereco: "Rua Dom Bosco, 723, Boa Vista",
    horario: "Todos os dias, das 07h às 18h (inclusive sábados, domingos e feriados)",
  },
  {
    nome: "IHENE",
    endereco: "Rua Tabira 54, Recife",
    telefone: "50050330",
    horario: "Todos os dias, das 07h às 18h (inclusive sábados, domingos e feriados)",
  },
];

const DoadorPage = () => {
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
      const nextDate = dayjs(lastDonation).add(intervalDays, "day").format("DD/MM/YYYY");
      setNextDonationDate(nextDate);
    }
  };

  return (
    <Flex direction={["column", "row"]} bg="white" minH="100vh" p={5} color="red.700">
      {/* Coluna Esquerda - Locais de Doação */}
      <VStack
        align="start"
        spacing={6}
        w={["100%", "30%"]}
        maxH="100vh"
        overflowY="auto"
        pr={[0, 4]}
        borderRight={["none", "1px solid #E2E8F0"]}
        mb={[4, 0]}
      >
        <Heading as="h1" size="xl" mb={6} textAlign={["center", "left"]}>
          Locais de Doação de Sangue
        </Heading>
        {locais.map((local, index) => (
          <Box
            key={index}
            bg="red.100"
            p={5}
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)", boxShadow: "lg", bg: "red.200" }}
            w="100%"
          >
            <VStack align="start" spacing={3}>
              <Text fontWeight="bold" fontSize="lg" color="red.700">{local.nome}</Text>
              <Text color="red.600">{local.endereco}</Text>
              {local.cep && <Text color="red.600">CEP: {local.cep}</Text>}
              <Text fontSize="sm" color="red.500" fontWeight="medium">{local.horario}</Text>
              <Flex gap={3} mt={3}>
                <Button size="sm" colorScheme="red" variant="outline" leftIcon={<FaMapMarkerAlt />}>
                  Rotas
                </Button>
                <Button size="sm" colorScheme="red" variant="outline" leftIcon={<FaPhoneAlt />}>
                  Ligar
                </Button>
              </Flex>
            </VStack>
          </Box>
        ))}
      </VStack>

      {/* Coluna Direita - Outros Conteúdos */}
      <Flex direction="column" align="center" w={["100%", "70%"]} p={5}>
        <Heading as="h2" size="lg" mt={[4, 10]} mb={6} textAlign="center">
          Dúvidas sobre Doação de Sangue
        </Heading>
        <SimpleGrid columns={[2, 3]} spacing={4} w="full" maxW="1200px">
          <Box bg="red.100" p={5} borderRadius="md" boxShadow="md" _hover={{ bg: "red.200" }}>
            <Icon as={FaFlask} boxSize={6} color="red.700" mb={2} />
            <Text fontWeight="bold" fontSize="md" color="red.700">Tipos de Exames</Text>
            <Text fontSize="sm" color="red.600">
              Antes da doação, são realizados exames laboratoriais para garantir a saúde do doador e segurança do receptor.
            </Text>
          </Box>
          <Box bg="red.100" p={5} borderRadius="md" boxShadow="md" _hover={{ bg: "red.200" }}>
            <Icon as={FaTint} boxSize={6} color="red.700" mb={2} />
            <Text fontWeight="bold" fontSize="md" color="red.700">Tipos de Doação</Text>
            <Text fontSize="sm" color="red.600">
              Você pode doar sangue total, plaquetas ou plasma, conforme as necessidades dos hospitais e pacientes.
            </Text>
          </Box>
          <Box bg="red.100" p={5} borderRadius="md" boxShadow="md" _hover={{ bg: "red.200" }}>
            <Icon as={FaSearch} boxSize={6} color="red.700" mb={2} />
            <Text fontWeight="bold" fontSize="md" color="red.700">Critérios de Doação</Text>
            <Text fontSize="sm" color="red.600">
              Certifique-se de que atende aos critérios de saúde e idade exigidos para doar com segurança.
            </Text>
          </Box>
          <Box bg="red.100" p={5} borderRadius="md" boxShadow="md" _hover={{ bg: "red.200" }}>
            <Icon as={FaHeart} boxSize={6} color="red.700" mb={2} />
            <Text fontWeight="bold" fontSize="md" color="red.700">Benefícios da Doação</Text>
            <Text fontSize="sm" color="red.600">
              A doação de sangue é um ato essencial que salva vidas e apoia pacientes em tratamentos críticos.
            </Text>
          </Box>
          <Box bg="red.100" p={5} borderRadius="md" boxShadow="md" _hover={{ bg: "red.200" }}>
            <Icon as={FaClock} boxSize={6} color="red.700" mb={2} />
            <Text fontWeight="bold" fontSize="md" color="red.700">Intervalo entre Doações</Text>
            <Text fontSize="sm" color="red.600">
              O intervalo entre doações varia de acordo com o tipo de doação e o gênero do doador. Consulte seu próximo prazo.
            </Text>
          </Box>
          <Box bg="red.100" p={5} borderRadius="md" boxShadow="md" _hover={{ bg: "red.200" }}>
            <Icon as={FaInfoCircle} boxSize={6} color="red.700" mb={2} />
            <Text fontWeight="bold" fontSize="md" color="red.700">Preparação para Doação</Text>
            <Text fontSize="sm" color="red.600">
              Hidrate-se bem e faça refeições leves antes de doar sangue para garantir uma experiência segura e eficaz.
            </Text>
          </Box>
        </SimpleGrid>

        {/* Seção de "Já posso doar novamente?" */}
        <Box mt={10} p={6} bg="red.100" borderRadius="md" boxShadow="md" w="full" maxW="600px">
          <Heading as="h2" size="lg" mb={4} color="red.700" textAlign="center">
            Já posso doar novamente?
          </Heading>
          <FormControl mb={4}>
            <FormLabel>Data da última doação</FormLabel>
            <Input
              type="date"
              value={lastDonation}
              onChange={(e) => setLastDonation(e.target.value)}
              bg="white"
              color="black"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Gênero</FormLabel>
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
          <FormControl mb={4}>
            <FormLabel>Tipo de doação anterior</FormLabel>
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
            <Text mt={4} fontWeight="bold" color="red.700" textAlign="center">
              Você poderá doar novamente a partir de: {nextDonationDate}
            </Text>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default DoadorPage;
