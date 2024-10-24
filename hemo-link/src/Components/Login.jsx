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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDocumentTitle } from "./UseDocumentTitle";
import { Formik, Field, Form } from "formik";
import login from "../api/login";
import AppModal from "./AppModal";

function Login({ loginType, isDonor }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [modalContent, setModalContent] = useState({});
  const [successRegistration, setSuccessRegistration] = useState(false);
  const registerUrl = isDonor ? "/cadastro-doador" : "/cadastro-clinica";
  const { isOpen, onOpen, onClose } = useDisclosure();

  function onUsernameChange(event) {
    setUserName(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  const getInitialValues = () => {
    const initialValues = {
      email: "",
      password: "",
    };
    return initialValues;
  };

  const handleSubmit = async (values, actions) => {
    actions.setSubmitting(true);

    try {
      const response = await login(values);

      if (response.access_token) {
        actions.resetForm();
        setModalContent({
          header: "Login realizado com sucesso",
          body: response.access_token,
        });
        console.log(response);
        setSuccessRegistration(true);
        setUserName("");
        setPassword("");
      } else {
        setModalContent({
          header: "Cadastro não realizado.",
          body: response.message,
        });
        setSuccessRegistration(false);
      }
      onOpen();
    } catch (error) {
      setModalContent({
        header: "Cadastro não realizado.",
        body: response.message,
      });

      onOpen();
    } finally {
      actions.setSubmitting(false);
    }
  };

  useDocumentTitle(loginType);

  return (
    <>
      <Formik
        initialValues={getInitialValues(isDonor)}
        onSubmit={(value, actions) => {
          handleSubmit(value, actions);
        }}
      >
        {(props) => (
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
              bg="hemoSecondary"
              borderColor="hemoSecondary"
              color="white"
              boxShadow="dark-lg"
            >
              <Heading size="lg" mb="5">
                {loginType}
              </Heading>
              <Form>
                <FormControl>
                  <Flex direction="column" gap="2">
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl isRequired>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            {...field}
                            id="email"
                            type="email"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            _focus={{ boxShadow: "none" }}
                            onChange={(e) => {
                              field.onChange(e);
                              onUsernameChange(e);
                            }}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl>
                          <FormLabel htmlFor="password">Senha</FormLabel>
                          <Input
                            {...field}
                            id="password"
                            type="password"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            _focus={{ boxShadow: "none" }}
                            onChange={(e) => {
                              field.onChange(e);
                              onPasswordChange(e);
                            }}
                          />
                        </FormControl>
                      )}
                    </Field>

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
                      isLoading={props.isSubmitting}
                      color="white"
                      type="submit"
                      _hover={{ bg: "hemoSecondary" }}
                      _disabled={{
                        cursor: "not-allowed",
                        bg: "hemoButtonDisabled",
                        color: "white",
                      }}
                    >
                      Entrar
                    </Button>
                    <Link to={`${registerUrl}`}>
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
              </Form>
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
        )}
      </Formik>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        modalContent={modalContent}
        footerContent={
          successRegistration && (
            <>
              <Link to={isDonor ? "/login-doador" : "/login-clinica"}>
                <Button colorScheme="blue" onClick={onClose}>
                  OK
                </Button>
              </Link>
            </>
          )
        }
      />
    </>
  );
}

export default Login;
