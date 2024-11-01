import {
  Flex,
  Box,
  Button,
  IconButton,
  useDisclosure,
  Image,
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
        {/* Logo */}
        <Box>
          <Link to="http://localhost:5173/" isExternal>
            <Image src="/./img/logo-hemolink.jpg" alt="Hemo Link" boxSize="100px" />
          </Link>
        </Box>

        {/* Botões */}
        <Flex gap="3" display={["none", "none", "none", "flex"]}>
          <Link to="/login-doador">
            <Button
              bg="hemoPrimary"
              color="headerColor"
              py="6"
              px="10"
              borderRadius="23"
              _hover={{ bg: "hemoPrimaryHover" }}
            >
              Entrar como doador
            </Button>
          </Link>

          <Link to="/login-clinica">
            <Button
              bg="hemoPrimary"
              color="headerColor"
              py="6"
              px="10"
              borderRadius="23"
              _hover={{ bg: "hemoPrimaryHover" }}
            >
              Entrar como Clínica
            </Button>
          </Link>

          <Link to="/cadastro-doador">
            <Button
              bg="hemoPrimary"
              color="headerColor"
              py="6"
              px="10"
              borderRadius="23"
              _hover={{ bg: "hemoPrimaryHover" }}
            >
              Cadastro Doador
            </Button>
          </Link>

          <Link to="/cadastro-clinica">
            <Button
              bg="hemoPrimary"
              color="headerColor"
              py="6"
              px="10"
              borderRadius="23"
              _hover={{ bg: "hemoPrimaryHover" }}
            >
              Cadastro Clínica
            </Button>
          </Link>
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
                <Link to="/login-doador">
                  <Button
                    bg="headerColor"
                    color="hemoPrimary"
                    textDecoration="underline"
                    fontSize={["2xl", "2xl", "5xl", "5xl"]}
                    onClick={onClose}
                  >
                    Entrar como Doador
                  </Button>
                </Link>
                <Link to="/login-clinica">
                  <Button
                    bg="headerColor"
                    color="hemoPrimary"
                    textDecoration="underline"
                    fontSize={["2xl", "2xl", "5xl", "5xl"]}
                    onClick={onClose}
                  >
                    Entrar como Clínica
                  </Button>
                </Link>
                <Link to="/cadastro-doador">
                  <Button
                    bg="headerColor"
                    color="hemoPrimary"
                    borderRadius="23"
                    textDecoration="underline"
                    fontSize={["2xl", "2xl", "5xl", "5xl"]}
                    onClick={onClose}
                  >
                    Cadastro Doador
                  </Button>
                </Link>

                <Link to="/cadastro-clinica">
                  <Button
                    bg="headerColor"
                    color="hemoPrimary"
                    borderRadius="23"
                    textDecoration="underline"
                    fontSize={["2xl", "2xl", "5xl", "5xl"]}
                    onClick={onClose}
                  >
                    Cadastro Clínica
                  </Button>
                </Link>
              </Flex>
            </MotionBox>
          ) : null}
        </AnimatePresence>
      </Flex>
    </>
  );
}

export default Header;
