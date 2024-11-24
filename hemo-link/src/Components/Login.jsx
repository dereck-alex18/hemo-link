import {
  Flex,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDocumentTitle } from "./UseDocumentTitle";
import { Formik, Field, Form } from "formik";
import login from "../api/login";
import AppModal from "./AppModal";
import { loginTokenHandling } from "../helpers/handleAuthentication";

function Login({ loginType, isDonor }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [modalContent, setModalContent] = useState({});
  const [successRegistration, setSuccessRegistration] = useState(false);
  const registerUrl = isDonor ? "/cadastro-doador" : "/cadastro-clinica";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

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
      values.isDonor = isDonor;
      const response = await login(values);

      loginTokenHandling(response);
      if (response.access_token) {
        loginTokenHandling(response, isDonor);
        actions.resetForm();
        navigate(isDonor ? "/dashboard-doador" : "/dashboard-clinica");
        window.dispatchEvent(new Event("storage"));
        setModalContent({
          header: "Login realizado com sucesso",
          body: "",
        });
        setSuccessRegistration(true);
        setUserName("");
        setPassword("");
      } else {
        setModalContent({
          header: "Login não realizado.",
          body: response.message,
        });
        setSuccessRegistration(false);
      }
      onOpen();
    } catch (error) {
      setModalContent({
        header: "Cadastro não realizado.",
        body: "Something went wrong!",
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
            height={["90vh", "90vh", "92vh"]}
            bg="hemoPrimary"
            justify="space-around"
            align="center"
            overflow="hidden"
            gap={["0", "0", "10", "30"]}
            sx={{
              "@media (orientation: landscape) and (max-width: 1023px)": {
                alignItems: "flex-start",
                mt: "5",
              },
            }}
          >
            <Flex
              p={["4", "7", "10", "10"]}
              border="1px"
              bg="hemoSecondary"
              borderColor="hemoSecondary"
              color="white"
              boxShadow="dark-lg"
              justify="center"
              flex="1"
              flexDirection="column"
              h="100%"
            >
              <Heading size="xl" mb="5" textAlign="center">
                {loginType}
              </Heading>
              <Form>
                <FormControl>
                  <Flex direction="column" gap="5">
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            {...field}
                            id="email"
                            type="email"
                            bg="hemoSeconary"
                            border="none"
                            borderRadius="25px"
                            color="textInput"
                            placeholder="Email"
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
                            borderRadius="25px"
                            placeholder="Senha"
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
                      background="linear-gradient(to right, #b50000, #cacaca)"
                      boxShadow="xl"
                      backgroundSize="200% 200%"
                      isLoading={props.isSubmitting}
                      rounded="3xl"
                      color="white"
                      type="submit"
                      _hover={{
                        transform: "scale(1.1)",
                        animation: "moveGradient 2s linear infinite",
                      }}
                      _disabled={{
                        cursor: "not-allowed",
                        bg: "hemoButtonDisabled",
                        color: "white",
                      }}
                      transition="all 0.5s ease-in-out"
                      sx={{
                        "@keyframes moveGradient": {
                          "0%": {
                            backgroundPosition: "0% 50%",
                          },
                          "50%": {
                            backgroundPosition: "100% 50%",
                          },
                          "100%": {
                            backgroundPosition: "0% 50%",
                          },
                        },
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
            </Flex>

            <Flex
              display={["none", "none", "none", "flex"]}
              p="1"
              border="1px"
              borderColor="hemoPrimary"
              color="white"
              borderRadius="xl"
              flex="2"
              justify="center"
              backgroundImage="url('images/salvarVidas.jpeg')"
              backgroundSize="cover"
              backgroundPosition="center"
              h="50%"
              mr={10}
            >
            </Flex>
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
