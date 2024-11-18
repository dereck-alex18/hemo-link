import React from 'react';
import {
  Box, Flex, Text, Image, Button, Heading, Divider, VStack, Stack,
} from '@chakra-ui/react';

const LandingPage = () => {
  return (
    <Box fontFamily="Arial, sans-serif" p={4}>
      <Heading textAlign="center" color="red.500" fontWeight="bold" fontSize={['2xl', '3xl', '4xl']} mb={4}>
        Doe Sangue, Salve Vidas
      </Heading>

      {/* Cabeçalho */}
      <Box w="100%" border="5px solid darkgray" overflow="hidden" my={4} borderRadius="md">
        <Image src="./img/img1.jpg" alt="Imagem de Cabeçalho" w="100%" h="auto" />
      </Box>

      <Divider borderColor="gray.300" my={6} />

      <Heading as="h1" textAlign="center" color="red.500" fontWeight="bold" fontSize={['xl', '2xl', '3xl']} mb={4}>
        Dia mundial da doação de sangue
      </Heading>

      {/* Bloco de Conteúdo Responsivo */}
      <Flex
        direction={['column', 'column', 'row']}
        align="center"
        justifyContent="center"
        my={6}
        px={[2, 4, 8]}
      >
        <Box bg="red.500" color="white" p={[4, 6, 8]} flex="1" mb={[4, 4, 0]} mr={[0, 0, 4]} borderRadius="md" maxW="600px">
          <Text fontSize={['md', 'lg', 'xl']} textAlign="justify">
            O dia mundial da doação de sangue, celebrado em 14 de junho, destaca a importância do ato que salva milhões de vidas. Cada doação pode salvar até 4 pessoas, sendo essencial em tratamentos e emergências. Se você tem entre 16 e 69 anos, pesa mais de 50kg e está saudável, faça parte dessa corrente de solidariedade e doe sangue.
          </Text>
        </Box>
        <Box flex="1" maxW="400px">
          <Image src="./img/img2.jpg" alt="Imagem de apoio" w="100%" h="auto" borderRadius="md" />
        </Box>
      </Flex>

      <Divider borderColor="gray.300" my={6} />

      {/* Benefícios */}
      <VStack spacing={4} align="center" my={4} px={[2, 4, 8]}>
        <Heading as="h2" fontWeight="bold" color="black" fontSize={['lg', 'xl', '2xl']} mb={2}>
          Benefícios de doar sangue
        </Heading>
        <Stack direction={['column', 'column', 'row']} align="center" spacing={[4, 6, 8]} w="100%" maxW="1000px">
          <Box bg="gray.600" color="white" p={[4, 6]} borderRadius="md" maxW="600px" w="100%">
            <Text fontSize={['md', 'lg']} textAlign="justify">
              Salva vidas: Cada doação pode salvar até quatro pessoas, ajudando em cirurgias, tratamentos de câncer e emergências médicas. Melhora a saúde do doador: A doação regular pode ajudar a reduzir os níveis de ferro no sangue, diminuindo o risco de doenças cardíacas. Exame de saúde gratuito: Ao doar sangue, o doador recebe um exame de saúde que inclui verificação de pressão arterial, hemoglobina e outros indicadores. Senso de comunidade: Contribuir para a doação de sangue promove um sentimento de solidariedade e pertencimento à comunidade. Estímulo à produção de novas células sanguíneas: A doação estimula o corpo a produzir novas células sanguíneas, ajudando a manter a saúde do sistema circulatório.
            </Text>
          </Box>
          <Box flex="1" maxW="400px">
            <Image src="./img/img3.jpg" alt="Imagem de apoio" w="100%" h="auto" borderRadius="md" />
          </Box>
        </Stack>
        <Button border="2px solid red" borderRadius="md" bg="white" color="red.500" mt={4} _hover={{ bg: "red.500", color: "white" }}>
          Quero ser um herói
        </Button>
      </VStack>

      <Divider borderColor="gray.300" my={6} />

      {/* Dúvidas Frequentes */}
      <VStack spacing={4} align="center" my={4} px={[2, 4, 8]}>
        <Heading as="h2" fontWeight="bold" fontSize={['lg', 'xl', '2xl']} mb={2}>
          Dúvidas frequentes
        </Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={4}>
          {[
            { question: "Quem pode doar sangue?", answer: "Pessoas entre 16 e 69 anos, que pesem mais de 50 kg e estejam em boas condições de saúde." },
            { question: "O que devo fazer antes da doação?", answer: "É recomendável ter uma refeição leve antes de doar, evitar alimentos gordurosos e manter-se hidratado." },
            { question: "Quanto tempo leva a doação?", answer: "O processo de doação leva cerca de 10 a 15 minutos, mas é importante reservar um tempo para o atendimento e recuperação." },
            { question: "A doação de sangue dói?", answer: "A maioria das pessoas sente apenas uma leve picada ao inserir a agulha." },
            { question: "Com que frequência posso doar sangue?", answer: "Homens podem doar a cada três meses, mulheres a cada quatro meses." },
            { question: "Posso doar sangue se estiver tomando medicamentos?", answer: "Algumas medicações podem contraindicar a doação." },
            { question: "O que acontece após a doação?", answer: "Após doar, recomenda-se descansar por alguns minutos e consumir um lanche." },
          ].map((item, index) => (
            <Box key={index} bg="white" color="black" p={4} m={2} border="1px solid gray" borderRadius="md" maxW="300px">
              <Text fontWeight="bold">{item.question}</Text>
              <Text>{item.answer}</Text>
            </Box>
          ))}
        </Flex>
      </VStack>

      <Divider borderColor="gray.300" my={6} />

      {/* Requisitos para Doação */}
      <VStack spacing={4} align="center" my={4} px={[2, 4, 8]}>
        <Heading as="h2" color="red.500" fontWeight="bold" textAlign="center" fontSize={['lg', 'xl', '2xl']} mb={2}>
          O que preciso para doar?
        </Heading>
        <Flex direction={['column', 'row']} justifyContent="space-between" w="100%" maxW="800px">
          <Box flex="1" mb={[4, 0]} mr={[0, 4]} maxW="400px">
            <Image src="./img/img4.jpg" alt="Imagem de apoio" w="100%" h="auto" borderRadius="md" />
          </Box>
          <Box flex="1" textAlign="left" ml={[0, 4]}>
            <Text fontSize={['md', 'lg']}>
              Para ser um doador de sangue, é fundamental atender a alguns requisitos: Ter entre 16 e 69 anos, pesar mais de 50 kg, estar em boas condições de saúde, e fazer uma refeição leve antes da doação.
            </Text>
          </Box>
        </Flex>
        <Button border="2px solid red" borderRadius="md" bg="white" color="red.500" mt={4} _hover={{ bg: "red.500", color: "white" }}>
          Quero ser um herói
        </Button>
      </VStack>

      {/* Rodapé */}
      <Box bg="red.600" color="white" textAlign="center" p={5} mt={20} borderRadius="md">
        <Text>Sobre | Contatos | Direitos Reservados</Text>
      </Box>
    </Box>
  );
};

export default LandingPage;