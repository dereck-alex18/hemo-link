import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
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
} from "@chakra-ui/react";

const formValidation = Yup.object({
  name: Yup.string().required("O nome é obrigatorio!"),
  email: Yup.string()
    .email("Email inválido")
    .required("O email é obrigatório!"),
  password: Yup.string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .required("A senha é obrigatória"),
  address: Yup.string().required("Endereço é obrigatório!"),
  bloodType: Yup.string().required("Tipo sanguíneo é obrigatório!"),
  telefone: Yup.string()
    .matches(/^\(\d{2}\)\s?9.?\d{4}-\d{4}$/, "Telefone inválido")
    .required("O Telefone é obrigatorio"),
  cpf: Yup.string()
    .matches(/^\d{3}.?\d{3}.?\d{3}-?\d{2}$/, "CPF inválido!")
    .required("CPF é obrigatório!"),
  profissao: Yup.string().required("Profissão é obrigratório!"),
  cep: Yup.string()
    .matches(/^\d{5}-?\d{3}$/, "CEP inválido!")
    .required("CEP é obrigatório!"),
  cidade: Yup.string().required("Cidade é obrigratória!"),
  estado: Yup.string().required("Estado é obrigratório!"),
  endereco: Yup.string().required("Endereco é obrigratório!"),
  disponibilidade: Yup.string().required("Disponibilidade é obrigatório"),
});

function Register() {
  const sanitizeCPF = (cpfValue) => cpfValue.replace(/[^\d.-]/g, "");
  const sanitizeTel = (telValue) => telValue.replace(/[^\d().-\s]/g, "");
  const sanitizeCep = (cepValue) => cepValue.replace(/[^\d-]/g, "");

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          address: "",
          cpf: "",
          telefone: "",
          profissao: "",
          cep: "",
          cidade: "",
          estado: "",
          endereco: "",
          bloodType: "",
          disponibilidade: "",
        }}
        validationSchema={formValidation}
      >
        {(props) => (
          <Box justify="center" align="center" mb={5}>
            <Flex
              bg="hemoPrimary"
              width={["90%", "80%", "70%", "70%"]}
              mt="10"
              p={["2", "4", "4", "4"]}
              boxShadow="dark-lg"
              direction="column"
            >
              <Box>
                <Form>
                  <Text fontSize="4xl" color="white" align="center">
                    Cadastro
                  </Text>
                  <Grid
                    templateColumns={[
                      "repeat(1, 1fr)",
                      "repeat(1, 1fr)",
                      "repeat(1, 1fr)",
                      "repeat(2, 1fr)",
                    ]}
                    columnGap={["2", "12"]}
                    rowGap="3"
                  >
                    <Field name="name">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                          color="white"
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
                          <FormErrorMessage color="white">
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
                          color="white"
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
                          <FormErrorMessage color="white">
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                          color="white"
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
                          <FormErrorMessage color="white">
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="telefone">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.telefone && form.touched.telefone
                          }
                          color="white"
                        >
                          <FormLabel htmlFor="telefone">Telefone</FormLabel>
                          <Input
                            {...field}
                            id="telefone"
                            placeholder="(81) 9.9999-9999"
                            bg="hemoSeconary"
                            color="textInput"
                            type="text"
                            onChange={(e) =>
                              form.setFieldValue(
                                "telefone",
                                sanitizeTel(e.target.value)
                              )
                            }
                          />
                          <FormErrorMessage color="white">
                            {form.errors.telefone}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="cpf">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.cpf && form.touched.cpf}
                          color="white"
                        >
                          <FormLabel htmlFor="cpf">CPF</FormLabel>
                          <Input
                            maxLength={14}
                            {...field}
                            id="cpf"
                            placeholder="999.999.999-99"
                            bg="hemoSeconary"
                            color="textInput"
                            type="text"
                            onChange={(e) =>
                              form.setFieldValue(
                                "cpf",
                                sanitizeCPF(e.target.value)
                              )
                            }
                          />
                          <FormErrorMessage color="white">
                            {form.errors.cpf}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="profissao">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.profissao && form.touched.profissao
                          }
                          color="white"
                        >
                          <FormLabel htmlFor="profissao">Profissão</FormLabel>
                          <Input
                            {...field}
                            id="profissao"
                            placeholder="Profissão"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="text"
                          />
                          <FormErrorMessage color="white">
                            {form.errors.profissao}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="cep">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.cep && form.touched.cep}
                          color="white"
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
                          <FormErrorMessage color="white">
                            {form.errors.cep}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="cidade">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.cidade && form.touched.cidade}
                          color="white"
                        >
                          <FormLabel htmlFor="cidade">Cidade</FormLabel>
                          <Input
                            {...field}
                            id="cidade"
                            placeholder="Cidade"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="text"
                          />
                          <FormErrorMessage color="white">
                            {form.errors.cidade}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="estado">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.estado && form.touched.estado}
                          color="white"
                        >
                          <FormLabel htmlFor="estado">Estado</FormLabel>
                          <Input
                            {...field}
                            id="estado"
                            placeholder="Estado"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="text"
                          />
                          <FormErrorMessage color="white">
                            {form.errors.estado}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="endereco">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.endereco && form.touched.endereco
                          }
                          color="white"
                        >
                          <FormLabel htmlFor="endereco">Endereço</FormLabel>
                          <Input
                            {...field}
                            id="endereco"
                            placeholder="Endereço"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                            type="text"
                          />
                          <FormErrorMessage color="white">
                            {form.errors.endereco}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="bloodType" as="select">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.bloodType && form.touched.bloodType
                          }
                          color="white"
                        >
                          <FormLabel htmlFor="bloodType">
                            Tipo sanguíneo
                          </FormLabel>
                          <Select
                            {...field}
                            id="bloodType"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
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
                          <FormErrorMessage color="white">
                            {form.errors.bloodType}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="disponibilidade" as="select">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.disponibilidade &&
                            form.touched.disponibilidade
                          }
                          color="white"
                        >
                          <FormLabel htmlFor="disponibilidade">
                            Disponibilidade
                          </FormLabel>
                          <Select
                            {...field}
                            id="disponibilidade"
                            bg="hemoSeconary"
                            border="none"
                            color="textInput"
                          >
                            <option value="">Disponivel para doar</option>
                            <option value="Sim">Sim</option>
                            <option value="Nao">Não</option>
                          </Select>
                          <FormErrorMessage color="white">
                            {form.errors.disponibilidade}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Grid>
                  <Button
                    w={["100%", "100%", "100%", "60%"]}
                    mt={8}
                    fontSize="xl"
                    bg="hemoButton"
                    boxShadow="xl"
                    color="hemoSecondary"
                    _hover={{ bg: "hemoSecondary", color: "textInput" }}
                    isLoading={props.isSubmitting}
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
    </>
  );
}

export default Register;
