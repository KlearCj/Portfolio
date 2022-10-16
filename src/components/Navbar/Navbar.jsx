import "../../global.css";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, Flex, Image, useDisclosure } from "@chakra-ui/react";
import Logo from '../../assets/logo.png'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex as="header" w="100%" pos="fixed" bg="#4E455E" zIndex={1000}>
      <ButtonGroup
        gap="1"
        pl={{ md: "20%", lg: "45%", xl: "55%" }}
        pt="2px"
        display={{ base: "none", md: "flex" }}
      >
        <a href="#home">
       <Button className="button">
         Home
        </Button>
        </a>
        <a href="#about">
        <Button className="button">
            About  
        </Button>
        </a>
        <a href="#skills">
        <Button className="button">
        Skills
        </Button>
        </a>
        <a href="#projects">
        <Button className="button">
        Projets
        </Button>
        </a>
        <a href="#contact">
        <Button className="button">
          Contact
        </Button>
        </a>
      </ButtonGroup>
      <Box
      pt="5px"
        display={{ base: "flex", md: "none" }}
        pl={{ base: "80%", sm: "85%" }}
      >
        <Button className="button" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}      
        onClose={onClose}
      >
        <DrawerContent  bg="#4E455E" alignItems="center" justifyContent="center" pt="50%">
          <DrawerCloseButton />
          <DrawerBody >
            <Box mb="10px">
            <Button borderBottom="none" onClick={onClose}>
            <a href="#home">Home</a>
            </Button>
            </Box>
            <Box mb="10px">
            <Button onClick={onClose}>
            <a href="#about">About</a>
            </Button>
            </Box>
            <Box mb="10px">
            <Button onClick={onClose}>
            <a href="#skills">Skills</a>
            </Button>
            </Box>
            <Box mb="10px">
            <Button onClick={onClose}>
            <a href="#projects">Projects</a>
            </Button>
            </Box>
            <Box mb="10px">
            <Button onClick={onClose}>
            <a href="#contact">Contact</a>
            </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
