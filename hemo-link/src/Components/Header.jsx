import {
  Avatar,
  Flex,
  Box,
  Heading,
  Button,
  IconButton,
  useDisclosure,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  getAuthenticationStatus,
  handleLogout,
  getAllLocalStorageItems,
} from "../helpers/handleAuthentication";
import { useEffect, useState } from "react";
import { RiUserHeartLine, RiHospitalLine } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdExit } from "react-icons/io";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    getAuthenticationStatus.isAuthenticated
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const MotionBox = motion(Box);
  const MotionIconButton = motion(IconButton);
  const {
    isOpen: isEntrarOpen,
    onOpen: onEntrarOpen,
    onClose: onEntrarClose,
  } = useDisclosure();
  const {
    isOpen: isCadastrarOpen,
    onOpen: onCadastrarOpen,
    onClose: onCadastrarClose,
  } = useDisclosure();
  const {
    isOpen: isAuthOpen,
    onOpen: onAuthOpen,
    onClose: onAuthClose,
  } = useDisclosure();

  const { name, userType } = getAllLocalStorageItems();

  useEffect(() => {
    const handleStorageChange = () => {
      const authStatus = getAuthenticationStatus();
      setIsAuthenticated(authStatus.isAuthenticated);
    };
    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <Flex
        bg="linear-gradient(to right, #b50000, #930c0c)"
        direction="row"
        gap={["5", "5"]}
        justify="space-between"
        align="center"
        py="3"
        px="8"
      >
        <Heading size="md" fontSize="44px" color="hemoPrimary">
          <Link to="/">Hemo Link</Link>
        </Heading>

        <Flex gap="5" align="center" display={["none", "none", "none", "flex"]}>
          {!isAuthenticated && (
            <>
              <Menu isOpen={isEntrarOpen}>
                <MenuButton
                  as={Button}
                  bg="hemoPrimary"
                  color="headerColor"
                  py="6"
                  px="10"
                  rounded="full"
                  onMouseEnter={onEntrarOpen}
                  onMouseLeave={onEntrarClose}
                  outline="none"
                  _focus={{ boxShadow: "none" }}
                >
                  Entrar
                </MenuButton>

                <MenuList
                  bg="hemoTerciary"
                  color="headerColor"
                  onMouseEnter={onEntrarOpen}
                  onMouseLeave={onEntrarClose}
                >
                  <MenuItem
                    as={Link}
                    to="/login-doador"
                    _hover={{ bg: "hemoCardBackground" }}
                  >
                    <Flex justify="center" align="center" gap={2}>
                      Entrar como doador
                      {<RiUserHeartLine />}
                    </Flex>
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    to="/login-clinica"
                    _hover={{ bg: "red.100" }}
                  >
                    <Flex justify="center" align="center" gap={3}>
                      Entrar como clínica
                      {<RiHospitalLine />}
                    </Flex>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu isOpen={isCadastrarOpen}>
                <MenuButton
                  as={Button}
                  bg="hemoPrimary"
                  color="headerColor"
                  py="6"
                  px="10"
                  rounded="full"
                  onMouseEnter={onCadastrarOpen}
                  onMouseLeave={onCadastrarClose}
                  _focus={{ boxShadow: "none" }}
                >
                  Cadastrar
                </MenuButton>

                <MenuList
                  bg="hemoTerciary"
                  color="headerColor"
                  onMouseEnter={onCadastrarOpen}
                  onMouseLeave={onCadastrarClose}
                >
                  <MenuItem
                    as={Link}
                    to="/cadastro-doador"
                    _hover={{ bg: "hemoCardBackground" }}
                  >
                    <Flex justify="center" align="center" gap={2}>
                      Cadastrar Doador
                      {<RiUserHeartLine />}
                    </Flex>
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    to="/cadastro-clinica"
                    _hover={{ bg: "red.100" }}
                  >
                    <Flex justify="center" align="center" gap={3}>
                      Cadastrar Clinica
                      {<RiHospitalLine />}
                    </Flex>
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}

          {isAuthenticated && (
            <>
              <Flex align="center" gap="1">
                <Menu isOpen={isAuthOpen}>
                  <MenuButton
                    as={Button}
                    bg="transparent"
                    // color="headerColor"
                    rounded="full"
                    onMouseEnter={onAuthOpen}
                    onMouseLeave={onAuthClose}
                    border="none"
                    outline="none"
                    _hover={{ bg: "transparent" }}
                    _focus={{ boxShadow: "none" }} // Removes blue outline
                    _active={{ bg: "transparent" }}
                  >
                    <Flex align="center" justify="flex-start" gap={2}>
                      <Avatar
                        name={name}
                        size="md"
                        color="hemoSecondary"
                        backgroundColor="hemoPrimary"
                      />
                      <Text color="hemoPrimary" fontSize="xl">
                        Bem vindo(a), {name}
                      </Text>
                    </Flex>
                  </MenuButton>

                  <MenuList
                    bg="transparent"
                    color="headerColor"
                    onMouseEnter={onAuthOpen}
                    onMouseLeave={onAuthClose}
                    border="none"
                  >
                    <MenuItem
                      as={Link}
                      to={
                        userType === "donor"
                          ? "/dashboard-doador"
                          : "/dashboard-clinica"
                      }
                    >
                      <Flex justify="center" align="center" gap={2}>
                        Dashboard {userType === "donor" ? "Doador" : "Clinica"}
                        {<MdOutlineSpaceDashboard />}
                      </Flex>
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      to={
                        userType === "donor"
                          ? "/login-doador"
                          : "/login-clinica"
                      }
                      onClick={handleLogout}
                    >
                      <Flex justify="center" align="center" gap={2}>
                        Sair
                        {<IoMdExit />}
                      </Flex>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </>
          )}
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
                {!isAuthenticated && (
                  <>
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
                        Entrar como Clinica
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
                        Cadastro Clinica
                      </Button>
                    </Link>
                  </>
                )}

                {isAuthenticated && (
                  <>
                    <Avatar
                      name={name}
                      size="md"
                      color="hemoSecondary"
                      backgroundColor="hemoPrimary"
                    />
                    <Link
                      to={
                        userType === "donor"
                          ? "/dashboard-doador"
                          : "dashboard-clinica"
                      }
                    >
                      <Button
                        bg="headerColor"
                        color="hemoPrimary"
                        textDecoration="underline"
                        fontSize={["2xl", "3xl", "5xl", "5xl"]}
                        onClick={() => {
                          onClose();
                        }}
                      >
                        Dashboard {userType === "donor" ? "Doador" : "Clinica"}
                      </Button>
                    </Link>
                    <Link
                      to={
                        userType === "donor" ? "/login-doador" : "login-clinica"
                      }
                    >
                      <Button
                        bg="headerColor"
                        color="hemoPrimary"
                        textDecoration="underline"
                        fontSize={["2xl", "3xl", "5xl", "5xl"]}
                        onClick={() => {
                          onClose();
                          handleLogout();
                        }}
                      >
                        Sair
                      </Button>
                    </Link>
                  </>
                )}
              </Flex>
            </MotionBox>
          ) : null}
        </AnimatePresence>
      </Flex>
    </>
  );
}

export default Header;
