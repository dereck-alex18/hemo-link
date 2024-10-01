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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDocumentTitle } from "./UseDocumentTitle";

function Login({ loginType }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function onUsernameChange(event) {
    setUserName(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  useDocumentTitle(loginType);

  return (
    <>
      <Flex
        height={["70vh", "70vh", "90vh"]}
        bg="hemoPrimary"
        justify="center"
        align="center"
        gap={["0", "0", "10", "24"]}
        sx={{
          "@media (orientation: landscape) and (max-width: 1023px)": {
            alignItems: "flex-start",
            mt: "5",
          },
        }}
      >
        <Box
          m="3"
          p={["4", "7", "10", "10"]}
          border="1px"
          bg="hemoPrimary"
          borderColor="hemoPrimary"
          color="white"
          boxShadow="dark-lg"
        >
          <Heading size="lg" mb="5">
            {loginType}
          </Heading>
          <FormControl>
            <Flex direction="column" gap="2">
              <FormLabel>Email</FormLabel>
              <Input
                onChange={onUsernameChange}
                type="email"
                bg="hemoSeconary"
                border="none"
                color="textInput"
                _focus={{ boxShadow: "none" }}
              />

              <FormLabel>Senha</FormLabel>
              <Input
                onChange={onPasswordChange}
                type="password"
                bg="hemoSeconary"
                border="none"
                color="textInput"
                _focus={{ boxShadow: "none" }}
              />
              <Link>
                <Text _hover={{ textDecoration: "underline" }}>
                  Esqueceu a senha?
                </Text>
              </Link>
              <Button
                isDisabled={!userName || !password}
                mt="2"
                bg="hemoButton"
                boxShadow="xl"
                color="hemoSecondary"
                _hover={{ bg: "hemoSecondary", color: "textInput" }}
                _disabled={{
                  cursor: "not-allowed",
                  bg: "hemoButtonDisabled",
                  color: "white",
                }}
              >
                Entrar
              </Button>
              <Link>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  textAlign="center"
                  mt="2"
                >
                  Criar conta
                </Text>
              </Link>
            </Flex>
          </FormControl>
        </Box>

        <Box
          display={["none", "none", "block", "block"]}
          p="1"
          border="1px"
          borderColor="hemoPrimary"
          color="white"
          borderRadius="xl"
        >
          <Image
            borderRadius="143px"
            boxSize="450px"
            objectFit="cover"
            src="src/assets/saveLives.png"
          />
        </Box>
      </Flex>

    </>
  );
}

export default Login;
