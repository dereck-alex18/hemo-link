import {
  Flex,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  Image,
  useDisclosure,
  useToast,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalContent,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { validateCampaingForm } from "../helpers/formValidator";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Field, Form } from "formik";
import "moment/locale/pt-br";
import moment from "moment";
import { getAllLocalStorageItems } from "../helpers/handleAuthentication";
import { createCampaign } from "../api/campaigns";
import { useDocumentTitle } from "./UseDocumentTitle";

moment.locale("pt-br");

function ClinicDashboardCard({ title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const MotionModalContent = motion(ModalContent);
  useDocumentTitle(title);
  const handleSubmit = async (values, actions) => {
    actions.setSubmitting(true);
    values.startDate = moment(values.startDate).toISOString();
    values.endDate = moment(values.endDate).toISOString();
    values.clinicId = getAllLocalStorageItems().id;
    
    try {
      const response = await createCampaign(values);
      if (response.id) {
        actions.resetForm();
        onClose();
        toast({
          title: "Campanha criada com sucesso!",
          description: "Agora os doadores poderão se cadastrar na campanha.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else if (response.statusCode === 400) {
        toast({
          title: "Campanha não criada!",
          description:
            "Favor, verifique os dados da campanha e tente novamente",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: "Campanha não criada!",
        description: "Favor, verifique os dados da campanha e tente novamente",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <Flex
        h="80vh"
        justify="center"
        align="center"
        flexDirection={["column", "column", "row", "row"]}
        gap={10}
      >
        <Button
          bgColor="hemoSecondary"
          color="hemoTerciary"
          size="lg"
          p="10"
          boxShadow="dark-lg"
          fontSize="2xl"
          _hover={{ bg: "hemoPrimaryHover", color: "textInput" }}
          onClick={onOpen}
        >
          Criar Campanha
        </Button>
        <Link to="/dashboard-clinica/doadores-inscritos">
          <Button
            bgColor="hemoSecondary"
            color="hemoTerciary"
            size="lg"
            p="10"
            boxShadow="dark-lg"
            fontSize="2xl"
            _hover={{ bg: "hemoPrimaryHover", color: "textInput" }}
            onClick={onOpen}
          >
            Doadores Inscritos
          </Button>
        </Link>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <MotionModalContent
            maxW={{ base: "90%", md: "600px", lg: "800px" }}
            color="textInput"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ModalHeader textAlign="center">Criar Campanha</ModalHeader>
            <ModalCloseButton />

            <Formik
              initialValues={{
                title: "",
                description: "",
                startDate: "",
                endDate: "",
                cep: "",
                city: "",
                state: "",
                region: "",
              }}
              validationSchema={validateCampaingForm}
              onSubmit={(value, actions) => {
                handleSubmit(value, actions);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <ModalBody pb={6}>
                    <FormControl
                      id="title"
                      isInvalid={errors.title && touched.title}
                    >
                      <FormLabel>Titulo</FormLabel>
                      <Field
                        as={Input}
                        name="title"
                        placeholder="Titulo da campanha"
                      />
                      <FormErrorMessage
                        name="title"
                        component="div"
                        color="hemoSecondary"
                        position="absolute"
                      >
                        {errors.title}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl
                      mt={8}
                      id="description"
                      isInvalid={errors.description && touched.description}
                    >
                      <FormLabel>Descrição</FormLabel>
                      <Field
                        as={Input}
                        name="description"
                        placeholder="Descrição da campainha"
                      />
                      <FormErrorMessage
                        name="description"
                        component="div"
                        color="hemoSecondary"
                        position="absolute"
                      >
                        {errors.description}
                      </FormErrorMessage>
                    </FormControl>

                    <Flex
                      justify="center"
                      align="center"
                      gap={["0", "0", "5", "5"]}
                      direction={["column", "column", "row", "row"]}
                    >
                      <FormControl
                        mt={8}
                        id="startDate"
                        isInvalid={errors.startDate && touched.startDate}
                      >
                        <FormLabel>Data inicial</FormLabel>
                        <Field as={Input} type="date" name="startDate" />

                        <FormErrorMessage
                          name="startDate"
                          component="div"
                          color="hemoSecondary"
                          position="absolute"
                        >
                          {errors.startDate}
                        </FormErrorMessage>
                      </FormControl>

                      <FormControl
                        mt={8}
                        id="endDate"
                        isInvalid={errors.endDate && touched.endDate}
                      >
                        <FormLabel>Data final</FormLabel>
                        <Field as={Input} type="date" name="endDate" />
                        <FormErrorMessage
                          name="endDate"
                          component="div"
                          color="hemoSecondary"
                          position="absolute"
                        >
                          {errors.endDate}
                        </FormErrorMessage>
                      </FormControl>

                      <FormControl
                        mt={8}
                        id="cep"
                        isInvalid={errors.cep && touched.cep}
                      >
                        <FormLabel>CEP</FormLabel>
                        <Field as={Input} name="cep" placeholder="CEP" />
                        <FormErrorMessage
                          name="cep"
                          component="div"
                          color="hemoSecondary"
                          position="absolute"
                        >
                          {errors.cep}
                        </FormErrorMessage>
                      </FormControl>
                    </Flex>
                    <FormControl
                      mt={8}
                      id="city"
                      isInvalid={errors.city && touched.city}
                    >
                      <FormLabel>Cidade</FormLabel>
                      <Field as={Input} name="city" placeholder="Cidade" />
                      <FormErrorMessage
                        name="city"
                        component="div"
                        color="hemoSecondary"
                        position="absolute"
                      >
                        {errors.city}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl
                      mt={8}
                      id="state"
                      isInvalid={errors.state && touched.state}
                    >
                      <FormLabel>Estado</FormLabel>
                      <Field as={Input} name="state" placeholder="Estado" />
                      <FormErrorMessage
                        name="state"
                        component="div"
                        color="hemoSecondary"
                        position="absolute"
                      >
                        {errors.state}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl
                      mt={8}
                      id="region"
                      isInvalid={errors.region && touched.region}
                    >
                      <FormLabel>Região</FormLabel>
                      <Field as={Input} name="region" placeholder="Região" />
                      <FormErrorMessage
                        name="region"
                        component="div"
                        color="hemoSecondary"
                        position="absolute"
                      >
                        {errors.region}
                      </FormErrorMessage>
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      bgColor="hemoButton"
                      color="hemoTerciary"
                      mr={3}
                      type="submit"
                      _hover={{ bgColor: "hemoSecondary" }}
                      isLoading={isSubmitting}
                    >
                      Enviar
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </MotionModalContent>
        </Modal>
      </Flex>
    </>
  );
}

export default ClinicDashboardCard;
