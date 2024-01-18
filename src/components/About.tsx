import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { BsDownload } from "react-icons/bs";
import myPhoto from "../assets/images/me.webp";
import SkillsList from "./SkillsList";

const About = () => {
  return (
    <Fade triggerOnce style={{ opacity: 0 }}>
      <Image
        src={myPhoto}
        boxSize={32}
        borderRadius={92}
        display="block"
        marginX="auto"
      />
      <Heading as="h2">About Me</Heading>
      <Text color="gray.600" textAlign="justify">
        I'm a software Developer wwith a proven track record in successfully
        delivering solutions across diverse projects. My 3+ years of experience
        has equipped me with a robust skill set to create efficient and
        functional software solutions. Proficient in a variety of programming
        languages such as JavaScript, HTML, CSS, React.js, Next.js, PHP,
        Laravel, MySQL, and C++, I showcase versatility and adeptness in working
        across various platforms and technologies.
      </Text>
      <Text color="gray.600" textAlign="justify">
        Additionally, my background in electrical and electronic engineering
        brings a unique perspective and technical aptitude to my work, allowing
        me to approach problems and solutions in innovative and efficient ways.
      </Text>
      <Center>
        <Button
          as={Link}
          href="/resume.pdf"
          variant="outline"
          borderColor="primary"
          marginTop={{
            base: 16,
            md: 24,
          }}
          rightIcon={<BsDownload />}
          borderRadius="md"
          transform="auto"
          transition="ease-in-out .3s"
          _hover={{
            scale: 1.1,
          }}
        >
          Download My Resume
        </Button>
      </Center>
    </Fade>
  );
};

export default About;
