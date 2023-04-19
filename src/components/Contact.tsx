import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { BsAt, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Fade triggerOnce style={{ opacity: 0 }}>
      <Box as="footer">
        <Heading as="h2">Contact me</Heading>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Flex flexDirection="column" gap={4} width="min-content">
            <HStack>
              <Icon as={BsWhatsapp} boxSize={6} />
              <Link href="tel:905338318714" color="gray.600">
                +90 533 831 87 14
              </Link>
            </HStack>
            <HStack>
              <Icon as={BsAt} boxSize={8} marginLeft="-5px" />
              <Link href="mailto:cephas.developer@gmail.com" color="gray.600">
                cephas.developer@gmail.com
              </Link>
            </HStack>
            <HStack>
              <Icon as={BsLinkedin} boxSize={6} />
              <Link href="https://www.linkedin.com/in/cephas" color="gray.600">
                https://www.linkedin.com/in/cephas
              </Link>
            </HStack>
          </Flex>
          <Box marginTop={8} flex={1} maxWidth="650px">
            <ContactForm />
          </Box>
        </Flex>
      </Box>
    </Fade>
  );
};

export default Contact;
