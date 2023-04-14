import { Box, Container, Text } from "@chakra-ui/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";
import Section from "./components/Section";

const App = () => {
  return (
    <Box as="div" className="container">
      <Container maxW="container.xl">
        <NavBar />
      </Container>
      <Section paddingBottom={0}>
        <Hero />
      </Section>
      <Section paddingBottom={0}>
        <ProjectList />
      </Section>
      <Section paddingTop={0}>
        <About />
      </Section>
      <Section>
        <Contact />
      </Section>
      <Box as="footer" borderTop="1px" borderColor="whiteAlpha.100" paddingTop={5}>
        <Text textAlign="center" color="gray.700">
          Copyright &copy; 2023
        </Text>
      </Box>
    </Box>
  );
};

export default App;
