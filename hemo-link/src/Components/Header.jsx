import {
  Flex,
  Box,
  Heading,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const MotionBox = motion(Box);
  const MotionIconButton = motion(IconButton);

  return (
    <>
      <Flex
        bg="headerColor"
        direction="row"
        gap={["5", "5"]}
        justify="space-between"
        align="center"
        py="3"
        px="8"
      >
        <Heading size="md" fontSize="44px" color="hemoPrimary">
          <a href="#">Hemo Link</a>
        </Heading>

        <Flex gap="3" display={["none", "none", "none", "flex"]}>
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

        <AnimatePresence>
          <MotionIconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ lg: "none" }}
            initial={{ rotate: 0, scale: 1 }}
            animate={isOpen ? { rotate: 180 } : { rotate: 180 }}
            transition={{ duration: 0.2 }}
            as={motion.button}
            zIndex="2"
            onClick={isOpen ? onClose : onOpen}
          />
        </AnimatePresence>
        <AnimatePresence>
          {isOpen ? (
            <MotionBox
              p={["4", "6"]}
              h="100vh"
              w="100vw"
              position="absolute"
              top="0"
              left="0"
              zIndex="1"
              bg="headerColor"
              display={{ lg: "none" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                gap={["4", "12"]}
              >
                <Link to="/login">
                  <Button
                    bg="headerColor"
                    color="hemoPrimary"
                    textDecoration="underline"
                    fontSize={["2xl", "2xl", "5xl", "5xl"]}
                    onClick={onClose}
                  >
                    Entrar
                  </Button>
                </Link>
                <Button
                  bg="headerColor"
                  color="hemoPrimary"
                  borderRadius="23"
                  textDecoration="underline"
                  fontSize={["2xl", "2xl", "5xl", "5xl"]}
                  onClick={onClose}
                >
                  Cadastrar
                </Button>
              </Flex>
            </MotionBox>
          ) : null}
        </AnimatePresence>
      </Flex>
    </>
  );
}

export default Header;
