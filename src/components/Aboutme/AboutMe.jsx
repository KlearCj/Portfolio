import { Flex, Heading } from '@chakra-ui/react'
import Lottie from 'react-lottie-player';
import catJson from "./46864-lovely-cats.json";

const AboutMe = () => {
  return (
    <Flex w={{base: "100%", lg:"80%"}} pl={{lg:"350px"}} pt={{lg:"30px"}} direction="column" id="about">
      <Heading size={{base:"lg", lg:"xl"}} color="#8878BA" pl="10px" mb="5px">
       About me
      </Heading>
      <Heading size={{base:"md", lg:"lg" }}color="#CFC9E3" p="10px">
      I am a unique, fun and adventurous software developer and animal lover. Graduated from Plataforma5, with the solid technical background and incredible soft skills I acquired there, I am ready for my first work experience in the IT world and to keep learning new technologies.
      </Heading>
      <Flex w="100%" justifyContent="center" alignItems="center">
      <Flex w={{base:"100%", sm:"50%", md:"40%"}}>
        <Lottie loop animationData={catJson} play />
      </Flex>
      </Flex>
    </Flex>
  )
}

export default AboutMe