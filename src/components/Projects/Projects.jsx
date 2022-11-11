import { Flex, Box, Heading, Grid, GridItem} from "@chakra-ui/react";

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
         I'm working on this
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Projects;
