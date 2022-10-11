import { Flex, Heading } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import lottieJson from "./75968-pink-hair-girl-01.json";

const Home = () => {
  return (
    <Flex
      id="home"
      pos="relative"
      width="100%"
      direction={{ base: "column", sm: "row" }}
      pb="20px"
      pt="35px"
    >
      <Flex display={{ base: "none", md: "flex" }} /* pos="absolute" */ h="300px">
        <Lottie loop animationData={lottieJson} play />
      </Flex>
      <Flex pt="40px" pl="15px" alignItems="start" direction="column">
        <Heading size="md" color="#242026">
          Hi, I am
        </Heading>
        <Heading size='2xl' color="#8F7CEC">
          Klear Madera
        </Heading>
        <Heading size='lg' color="#CFC9E3">
         Fullstack Developer
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Home;
