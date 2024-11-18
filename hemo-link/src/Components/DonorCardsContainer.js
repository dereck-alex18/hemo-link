import React, { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import DonorCard from "./DonorCard"; // importando o componente DonorCard

const DonorCardsContainer = () => {
  const [clinics, setClinics] = useState([
    {
      id: 1,
      description: "Clínica de Doação de Sangue de Olinda",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      cep: "12345-678",
      city: "Olinda",
      state: "PE",
      region: "Nordeste",
    },
    {
      id: 2,
      description: "Clínica de Doação de Sangue de Recife",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      cep: "87654-321",
      city: "Recife",
      state: "PE",
      region: "Nordeste",
    },
    // Adicione mais clínicas conforme necessário
  ]);

  const updateClinic = (id, updatedData) => {
    setClinics((prevClinics) =>
      prevClinics.map((clinic) => (clinic.id === id ? { ...clinic, ...updatedData } : clinic))
    );
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {clinics.map((clinic) => (
        <DonorCard
          key={clinic.id}
          props={{ ...clinic, updateClinic }} // passando a função de atualização como prop
        />
      ))}
    </SimpleGrid>
  );
};

export default DonorCardsContainer;
