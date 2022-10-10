import { Flex, Box, Heading, Grid, GridItem } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box w="100%" id="projects" pb="10px">
      <Heading size="lg" color="#8878BA" pl="10px" mb="5px">
        Projects
      </Heading>
      <Grid templateColumns="repeat(1, 1fr)" gap={2}>
        <GridItem>Revista</GridItem>
        <GridItem>Freezeats</GridItem>
        <GridItem>uwumovies</GridItem>
      </Grid>
    </Box>
  );
};

export default Projects;
