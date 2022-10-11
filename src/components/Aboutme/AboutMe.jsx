import { Flex, Heading } from '@chakra-ui/react'
import Lottie from 'react-lottie-player';
import catJson from "./46864-lovely-cats.json";

const AboutMe = () => {
  return (
    <Flex w="100%" direction="column" id="about">
      <Heading size="lg" color="#8878BA" pl="10px" mb="5px">
       About me
      </Heading>
      <Heading size="md" color="#CFC9E3" p="10px">
       I'm an animal lover. A girl who loves challenges
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsa enim distinctio nam ab atque! Earum rem quae omnis architecto praesentium vel perspiciatis, aut fugit odio quod recusandae harum repellendus?
      </Heading>
      <Flex w="100%" justifyContent="center" alignItems="center">
      <Flex w={{base:"100%", sm:"50%", md:"40%", lg:"30%"}}>
        <Lottie loop animationData={catJson} play />
      </Flex>
      </Flex>
    </Flex>
  )
}

export default AboutMe