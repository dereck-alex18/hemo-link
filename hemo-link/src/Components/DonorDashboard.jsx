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
import DonorCard from "./DonorCard";
  
  function DonorDashboard(){
    return(
        <>
            <DonorCard />
        </>
    );
  }

  export default DonorDashboard