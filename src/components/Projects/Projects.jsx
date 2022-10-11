import { Flex, Box, Heading, Grid, GridItem, Image } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box w="100%" id="projects" pb="10px">
      <Heading size="lg" color="#8878BA" pl="10px" mb="5px">
        Projects
      </Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap={2}>
        <GridItem
         border="1px solid #8F7CEC"
         _hover={{
             textDecoration: 'underline',
         }}>
          <Flex w="50%">
         <Image  />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Projects;
