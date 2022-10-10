import { Box, Flex } from "@chakra-ui/react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/Aboutme/AboutMe"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <>
    <Navbar/>
    <Home />
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
    </>
  );
}

export default App;
