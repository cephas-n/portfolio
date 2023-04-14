import { Box, Container } from "@chakra-ui/react";
import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Box as="div" className="container">
      <Container maxW="container.xl">
        <NavBar />
      </Container>
      <Container maxW="container.xl">Work</Container>
      <Container maxW="container.xl">About</Container>
      <Container maxW="container.xl">Contact</Container>
    </Box>
  );
};

export default App;
