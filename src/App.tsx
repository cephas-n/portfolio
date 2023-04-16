import { Box, Container, Text } from "@chakra-ui/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";
import Section from "./components/Section";
import SkillsList from "./components/SkillsList";

const App = () => {
  return (
    <Box as="div" className="container">
      <Container maxW="container.xl">
        <NavBar />
      </Container>
      <Section paddingBottom={{ base: 40, md: 6 }}>
        <Hero />
      </Section>
      <Section bgColor="gray.750" paddingBottom={{ base: 2, md: 1 }}>
        <ProjectList />
      </Section>
      <Section paddingTop={{ base: 12, md: 24 }}>
        <About />
      </Section>
      <Section paddingTop={0}>
        <SkillsList />
      </Section>
      <Section bgColor="gray.750">
        <Contact />
      </Section>
      <Box
        as="footer"
        borderTop="1px"
        borderColor="whiteAlpha.100"
        paddingTop={5}
        bgColor="gray.750"
      >
        <Text
          textAlign="center"
          color="gray.700"
          marginBottom={0}
          paddingBottom={6}
        >
          Copyright &copy; 2023
        </Text>
      </Box>
    </Box>
  );
};

export default App;
