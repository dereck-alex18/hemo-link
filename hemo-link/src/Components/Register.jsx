import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Select,
  Flex,
  Text,
  Grid,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import getValidationSchema from "../helpers/formValidator";
import register from "../api/register";
import AppModal from "./AppModal";
import { Link } from "react-router-dom";

function Register({ title, isDonor }) {
  const [successRegistration, setSuccessRegistration] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const sanitizeCPF = (cpfValue) => cpfValue.replace(/[^\d.-]/g, "");
  const sanitizeTel = (telValue) => telValue.replace(/[^\d().-\s]/g, "");
  const sanitizeCep = (cepValue) => cepValue.replace(/[^\d-]/g, "");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (values, actions) => {
    actions.setSubmitting(true);

    try {
      const response = await register(values, isDonor);

      if (response.id) {
        actions.resetForm();
        setModalContent({
          header: "Cadastro realizado com sucesso!",
          body: "Faça login com as credenciais utilizadas no cadastro",
        });
        setSuccessRegistration(true);
      } else {
        setModalContent({
          header: "Cadastro não realizado.",
          body: response.message,
        });
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

  const getInitialValues = (isDonor, actions) => {
    const initialValues = {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      cep: "",
      city: "",
      state: "",
    }
    if(isDonor){
      initialValues.cpf = "";
      initialValues.bloodType = "";
    }

    return initialValues;
  }

  return (
    <>
      <Formik
        initialValues={getInitialValues(isDonor)}
        validationSchema={getValidationSchema(isDonor)}
        onSubmit={(value, actions) => {
          handleSubmit(value, actions);
        }}
      >
        {(props) => (
          <Box justify="center" align="center" mb={5}>
            <Flex
              bg="#eee"
              width={["90%", "80%", "70%", "70%"]}
              mt="10"
              p={["2", "4", "4", "4"]}
              boxShadow="dark-lg"
              direction="column"
            >
              <Box>
                <Form>
                  <Text
                    fontSize="4xl"
                    color="hemoSecondary"
                    align="center"
                    fontWeight="bold"
                  >
                    {title}
                  </Text>
                  <Grid
                    templateColumns={[
                      "repeat(1, 1fr)",
                      "repeat(1, 1fr)",
                      "repeat(1, 1fr)",
                      "repeat(2, 1fr)",
                    ]}
                    columnGap={["2", "10"]}
                    rowGap="10"
                  >
                    <Field name="name">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                          color="textInput"
                        >
                          <FormLabel htmlFor="name">Nome</FormLabel>
                          <Input
                            {...field}
                            id="name"
                            placeholder="Nome"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="text"
                          />
                          <FormErrorMessage
                            color="hemoSecondary"
                            position="absolute"
                          >
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                          color="textInput"
                        >
                          <FormLabel htmlFor="password">Senha</FormLabel>
                          <Input
                            {...field}
                            id="password"
                            placeholder="Senha"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="password"
                          />
                          <FormErrorMessage
                            color="hemoSecondary"
                            position="absolute"
                          >
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                          color="textInput"
                        >
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            {...field}
                            id="email"
                            placeholder="Email"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="email"
                          />
                          <FormErrorMessage
                            color="hemoSecondary"
                            position="absolute"
                          >
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="phone">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.phone && form.touched.phone}
                          color="textInput"
                        >
                          <FormLabel htmlFor="phone">Telefone</FormLabel>
                          <Input
                            {...field}
                            id="phone"
                            placeholder="(81) 9.9999-9999"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="text"
                            onChange={(e) =>
                              form.setFieldValue(
                                "phone",
                                sanitizeTel(e.target.value)
                              )
                            }
                          />
                          <FormErrorMessage
                            color="hemoSecondary"
                            position="absolute"
                          >
                            {form.errors.phone}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    {isDonor && (
                      <Field name="cpf">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.cpf && form.touched.cpf}
                            color="textInput"
                          >
                            <FormLabel htmlFor="cpf">CPF</FormLabel>
                            <Input
                              maxLength={14}
                              {...field}
                              id="cpf"
                              placeholder="999.999.999-99"
                              bg="hemoSeconary"
                              border="none"
                              color="textInput"
                              type="text"
                              onChange={(e) =>
                                form.setFieldValue(
                                  "cpf",
                                  sanitizeCPF(e.target.value)
                                )
                              }
                            />
                            <FormErrorMessage
                              color="hemoSecondary"
                              position="absolute"
                            >
                              {form.errors.cpf}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    )}

                    <Field name="cep">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.cep && form.touched.cep}
                          color="textInput"
                        >
                          <FormLabel htmlFor="cep">CEP</FormLabel>
                          <Input
                            {...field}
                            id="cep"
                            placeholder="50000-000"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="text"
                            onChange={(e) =>
                              form.setFieldValue(
                                "cep",
                                sanitizeCep(e.target.value)
                              )
                            }
                          />
                          <FormErrorMessage
                            color="hemoSecondary"
                            position="absolute"
                          >
                            {form.errors.cep}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="city">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.city && form.touched.city}
                          color="textInput"
                        >
                          <FormLabel htmlFor="city">Cidade</FormLabel>
                          <Input
                            {...field}
                            id="city"
                            placeholder="Cidade"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="text"
                          />
                          <FormErrorMessage
                            color="hemoSecondary"
                            position="absolute"
                          >
                            {form.errors.city}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="state">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.state && form.touched.state}
                          color="textInput"
                        >
                          <FormLabel htmlFor="state">Estado</FormLabel>
                          <Input
                            {...field}
                            id="state"
                            placeholder="Estado"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="text"
                          />
                          <FormErrorMessage
                            color="hemoSecondary"
                            position="absolute"
                          >
                            {form.errors.state}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="address">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.address && form.touched.address
                          }
                          color="textInput"
                        >
                          <FormLabel htmlFor="address">Endereço</FormLabel>
                          <Input
                            {...field}
                            id="address"
                            placeholder="Endereço"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="text"
                          />
                          <FormErrorMessage
                            color="hemoSecondary"
                            position="absolute"
                          >
                            {form.errors.address}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    {isDonor && <Field name="bloodType" as="select">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.bloodType && form.touched.bloodType
                          }
                          color="textInput"
                        >
                          <FormLabel htmlFor="bloodType">
                            Tipo sanguíneo
                          </FormLabel>
                          <Select
                            {...field}
                            id="bloodType"
                            border="none"
                            color="textInput"
                            bgColor="hemoTerciary"
                          >
                            <option value="">Tipo Sanguíneo</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                          </Select>
                          <FormErrorMessage
                            color="hemoSecondary"
                            position="absolute"
                          >
                            {form.errors.bloodType}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>}
                  </Grid>
                  <Button
                    w={["100%", "100%", "100%", "60%"]}
                    mt={8}
                    fontSize="xl"
                    bg="hemoButton"
                    boxShadow="xl"
                    color="hemoTerciary"
                    _hover={{ bg: "hemoSecondary" }}
                    isLoading={props.isSubmitting}
                    isDisabled={props.isSubmitting}
                    type="submit"
                    alignSelf="center"
                  >
                    Cadastrar
                  </Button>
                </Form>
              </Box>
            </Flex>
          </Box>
        )}
      </Formik>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        modalContent={modalContent}
        footerContent={
          successRegistration && (
            <>
              <Link to={isDonor ? '/login-doador' : '/login-clinica'}>
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

export default Register;
