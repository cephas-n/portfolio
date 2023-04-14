import { Box, Container } from "@chakra-ui/react";
import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";

const App = () => {
  return (
    <Box as="div" className="container">
      <Container maxW="container.xl" paddingBottom={48}>
        <NavBar />
      </Container>
      <Container maxW="container.xl" paddingBottom={48}>
        <Hero />
      </Container>
      <Container maxW="container.xl">
        <ProjectList />
      </Container>
      <Container maxW="container.xl" paddingBottom={48}>
        <About />
      </Container>
      <Container maxW="container.xl" paddingBottom={48}>
        Contact
      </Container>
    </Box>
  );
};

export default App;
