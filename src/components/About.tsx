import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
      <Text color="gray.600">
        As an accomplished software Developer with experience working across
        multiple teams and locations, I have gained a wealth of knowledge and
        expertise in building efficient and functional software solutions. my
        proficiency in various programming languages including Javascript, C++,
        PHP, Laravel, HTML, CSS, React JS, and MYSQL demonstrates my versatility
        and ability to work across different platforms and technologies with a
        portfolio under my name.
      </Text>
      <Text color="gray.600">
        In addition to my technical skills, my background in electrical
        engineering brings a unique perspective and technical aptitude to my
        work, allowing me to approach problems and solutions in innovative and
        efficient ways. With my impressive skill set and a broad range of
        experiences, I am a top-notch developer who can build anything from web
        apps to sophisticated software solutions.
      </Text>
      <Button
        variant="outline"
        borderColor="primary"
        marginX="auto"
        display="block"
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
    </Fade>
  );
};

export default About;
