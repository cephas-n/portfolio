import { Box, Center, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import {
  BsAt,
  BsGithub,
  BsLinkedin,
  BsMailbox,
  BsWhatsapp,
} from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { HStack } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Fade triggerOnce style={{ opacity: 0 }}>
      <Box as="footer">
        <Heading as="h2">Contact me</Heading>
        <Center>
          <Flex flexDirection="row" gap={4} width="min-content" margin="auto">
            <HStack>
              <Link
                href="https://www.linkedin.com/in/cephas-naweji-484062173/"
                color="gray.600"
                display="flex"
                padding={4}
                borderRadius={10}
              >
                <Icon as={BsLinkedin} boxSize={6} />
              </Link>
            </HStack>
            <HStack>
              <Link
                href="mailto:cephas.developer@gmail.com"
                color="gray.600"
                display="flex"
                padding={3}
                borderRadius={10}
              >
                <Icon as={MdMail} boxSize={7} />
              </Link>
            </HStack>
            <HStack>
              <Link
                href="https://www.github.com/cephas-n"
                color="gray.600"
                display="flex"
                padding={3}
                borderRadius={10}
              >
                <Icon as={BsGithub} boxSize={7} />
              </Link>
            </HStack>
          </Flex>
        </Center>
        <Center>
          <Box marginTop={10} flex={1} maxWidth="650px">
            <ContactForm />
          </Box>
        </Center>
      </Box>
    </Fade>
  );
};

export default Contact;
