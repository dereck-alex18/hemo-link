import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Flex
        bg="headerColor"
        direction={["column", "column", "row", "row"]}
        gap={["5", "5"]}
        justify="space-between"
        align="center"
        py="3"
        px="8"
      >
        <Heading size="md" fontSize="44px" color="hemoPrimary">
          <a href="#">Hemo Link</a>
        </Heading>

        <Flex gap="3">
          <Link to="/login">
            <Button
              bg="hemoPrimary"
              color="headerColor"
              py="6"
              px="10"
              borderRadius="23"
              _hover={{ bg: "hemoPrimaryHover" }}
            >
              Entrar
            </Button>
          </Link>
          <Button
            bg="hemoPrimary"
            color="headerColor"
            py="6"
            px="10"
            borderRadius="23"
            _hover={{ bg: "hemoPrimaryHover" }}
          >
            Cadastrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
