import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";

const App = () => {
  return (
    <Box as="div" className="container">
      <Container maxW="container.xl">
        <NavBar />
      </Container>
      <Container maxW="container.xl">
        <Hero />
      </Container>
      <Container maxW="container.xl" marginTop={48}>
        <ProjectList />
      </Container>
      <Container maxW="container.xl">About</Container>
      <Container maxW="container.xl">Contact</Container>
    </Box>
  );
};

export default App;
