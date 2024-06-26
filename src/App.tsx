import { Box, Container, Text } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";
import Section from "./components/Section";
import SkillsList from "./components/SkillsList";
import "react-toastify/dist/ReactToastify.css";
import Head from "./components/Head";
import { colors } from "./theme";

const App = () => {
  return (
    <>
      <Head />
      <Box as="div" className="container">
        <Box
          position="sticky"
          top="0"
          zIndex="1000"
          _dark={{ bgColor: "gray.800" }}
          _light={{ bgColor: "white" }}
        >
          <Container maxW="container.xl">
            <NavBar />
          </Container>
        </Box>
        <Section paddingBottom={{ base: 40, md: 6 }}>
          <Hero />
        </Section>
        <Section
          _dark={{ bgColor: "gray.750" }}
          _light={{ bgColor: "gray.100" }}
          paddingBottom={{ base: 2, md: 1 }}
          id="work"
        >
          <ProjectList />
        </Section>
        <Section paddingTop={{ base: 12, md: 24 }} id="about">
          <About />
        </Section>
        <Section paddingTop={0}>
          <SkillsList />
        </Section>
        <Section
          _dark={{ bgColor: "gray.750" }}
          _light={{ bgColor: "gray.100" }}
          id="contact"
        >
          <Contact />
        </Section>
        <Box
          as="footer"
          borderTop="1px"
          paddingTop={5}
          _dark={{
            bgColor: "gray.750",
            color: "gray.700",
            borderColor: "whiteAlpha.100",
          }}
          _light={{
            bgColor: "gray.100",
            color: "gray.500",
            borderColor: "blackAlpha.50",
          }}
        >
          <Text textAlign="center" marginBottom={0} paddingBottom={6}>
            Copyright &copy; 2024
          </Text>
        </Box>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          progressStyle={{
            backgroundColor: colors.primary as string,
          }}
        />
      </Box>
    </>
  );
};

export default App;
