import { Flex, Box, Heading, Grid, GridItem, Image } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box w="100%" pl={{lg:"350px"}} id="projects" pb="10px">
      <Heading size={{base:"lg", lg:"xl"}} color="#8878BA" pl="10px" mb="5px">
        Projects
      </Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap={2}>
        <GridItem
         border="1px solid #8F7CEC"
         _hover={{
             textDecoration: 'underline',
         }}>
          <Flex w="100%">
         <video src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1" autoPlay />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Projects;
