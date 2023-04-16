import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { BsAt, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Box as="footer">
      <Heading as="h2">Contact me</Heading>
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Flex flexDirection="column" gap={4} width="min-content">
          <Link as={HStack} color="gray.600">
            <Icon as={BsWhatsapp} boxSize={6} />
            <Text>+90 533 831 87 14</Text>
          </Link>
          <Link as={HStack} color="gray.600">
            <Icon as={BsAt} boxSize={8} marginLeft="-5px" />
            <Text>cephas.developer@gmail.com</Text>
          </Link>
          <Link as={HStack} color="gray.600">
            <Icon as={BsLinkedin} boxSize={6} />
            <Text>https://www.linkedin.com/in/cephas</Text>
          </Link>
        </Flex>
        <Box marginTop={8}>
          <ContactForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
