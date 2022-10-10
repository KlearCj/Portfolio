import { Box, Flex, Grid, GridItem, Heading, Img, Text } from "@chakra-ui/react";
import '../../global.css'
import data from './tech.json'

const Skills = () => {
  return (
<Box w="100%" id="skills">
 <Heading size="lg" color="#8878BA" pl="10px" mb="5px">
    Skills
  </Heading>
  <Flex 
  pt="20px"
  pos="relative"
  justifyContent="center"
  alignItems="center"
  h="500px">
<Box className="box">
 <Grid
 ml={{base:"10%", sm:"0px"}}
 mr={{base:"0", sm:"5px"}}
  templateColumns={{base:'repeat(2, 1fr)', sm:'repeat(3, 1fr)'}} gap={1}>
{
  data.tech.map((technology,i)=> <GridItem w={{base:'70%'}} key={i} textAlign="center" ml={{base:"10px"}} cursor="pointer" >
  <Img src={technology.logo} alt="logo" h={{base:"50px", sm:"80px"}} ml={{sm:"35px"}} mb="5px" />
  <Text fontSize={{base:"9px", sm:"15px"}} >{technology.name}</Text>
  </GridItem>)
}
 </Grid>
</Box>
  </Flex>
    </Box>)
};

export default Skills;
