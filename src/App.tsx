import { Box, Container } from "@chakra-ui/react";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";

const App = () => {
  return (
    <Box as="div" className="container">
      <Container maxW="container.xl">
        <NavBar />
      </Container>
      <Container maxW="container.xl" paddingBottom={48} paddingTop={28}>
        <Hero />
      </Container>
      <Container maxW="container.xl">
        <ProjectList />
      </Container>
      <Container maxW="container.xl" paddingBottom={48}>
        <About />
      </Container>
      <Container maxW="container.xl" paddingBottom={4}>
        <Contact />
      </Container>
    </Box>
  );
};

export default App;
