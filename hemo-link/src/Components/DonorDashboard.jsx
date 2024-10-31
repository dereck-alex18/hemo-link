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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import DonorCard from "./DonorCard";


function DonorDashboard() {
  return (
    <>
      <Flex justify="center" mt={['5', '5', '10', '10']} mb={['5', '5', '10', '10']}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={['5', '10', '10', '20']}
        >
          <GridItem>
            <DonorCard />
          </GridItem>
          <GridItem>
            <DonorCard />
          </GridItem>
          <GridItem>
            <DonorCard />
          </GridItem>
          <GridItem>
            <DonorCard />
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}

export default DonorDashboard;
