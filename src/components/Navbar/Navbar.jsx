import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, Flex, Heading} from "@chakra-ui/react";
import React from "react";
import ToggleColorMode from "./ToggleColorMode";


const Navbar = () => {
  return (
    <Flex  w="100%" h="50px">
{/*     <Box p='3' pl="10px" >
    <Heading size='md' color='#FFFFFF'>KM</Heading>
  </Box>
  <ButtonGroup gap='1' pl="80%" pt="2px">
    <Button bg='#DCCFEC'>About me</Button>
    <Button bg='#DCCFEC'>Skills</Button>
  </ButtonGroup> */}
   <Flex direction="row" alignItems="center" pl="72%" >
    <ToggleColorMode/>
    <Button ml="5px" bg="transparent" >
    <HamburgerIcon />
    </Button>
    </Flex>
    </Flex>
  );
};

export default Navbar;

