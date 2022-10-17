import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import lottieJson from "./75968-pink-hair-girl-01.json";
import {Github, LinkedIn} from '../../assets/Icons'
import cv from './Klear_Resume.pdf'

const Home = () => {
  return (
    <Flex
      id="home"
      pos="relative"
      width={{base:"100%", lg:"80%"}}
      ml={{lg:"200px"}}
      direction={{ base: "column", sm: "row" }}
      pb="20px"
      pt="35px"
    >
      <Flex display={{ base: "none", md: "flex" }}  /* pos="absolute" */ h={{lg:"500px"}}>
        <Lottie loop animationData={lottieJson} play />
      </Flex>
      <Flex pt={{base:"40px", lg:"100px"}} pl="15px" alignItems="start" direction="column">
        <Heading size={{base:"md", lg:"lg"}} color="#242026">
          Hi, I am
        </Heading>
        <Heading size={{base:'2xl', lg:"4xl"}} color="#8F7CEC">
          Klear Madera
        </Heading>
        <Heading size={{base:'lg', lg:"2xl" }}color="#CFC9E3">
         Fullstack Developer
        </Heading>
      <Box pl="20px" pt='5px'>
        <a download href={cv} >
        <Button className='button' size={{base:'sm', lg:'lg'}}>
      Download CV
        </Button>
        </a>
      {/*   <LinkedIn />
        <Github /> */}
      </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
