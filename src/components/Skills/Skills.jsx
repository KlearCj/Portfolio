import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import "../../global.css";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/JavaScript.png";
import Node from "../../assets/node.png";
import Git from "../../assets/Git.png";
import Postgres from "../../assets/postgresql.png";
import Mongo from "../../assets/mongo.png";
import Express from "../../assets/express.png";
import React from "../../assets/react.png";
import Next from "../../assets/Nextjs.png";
import Redux from "../../assets/redux.png";
import Chakra from "../../assets/chakra.png";

const Skills = () => {
  return (
    <Box w="100%" id="skills" pb="10px">
      <Heading size="lg" color="#8878BA" pl="10px" mb="5px">
        Skills
      </Heading>
      <Flex
        pos="relative"
        justifyContent="center"
        alignItems="center"
        h="450px"
      >
        <Box className="box">
          <Grid templateColumns={{ base: "repeat(3, 1fr)", md:"repeat(6, 1fr)" }} gap={1}>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={HTML} alt="HTML" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={CSS} alt="CSS" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={JavaScript} alt="JavaScript" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={Node} alt="Node" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={Git} alt="Git" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={Postgres} alt="Postgresql" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={Mongo} alt="Mongo" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={Express} alt="Express" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={React} alt="React" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={Next} alt="Next" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={Redux} alt="Redux" />
            </GridItem>
            <GridItem w={{ base: "80%", sm:"60%", md:"50%" }}>
              <Img src={Chakra} alt="Chakra" />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
