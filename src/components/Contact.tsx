import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { BsAt, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Box as="footer">
      <Heading as="h2">Contact me</Heading>
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Box width="min-content">
          <Link as={HStack} marginBottom={6} color="gray.500">
            <Icon as={BsWhatsapp} boxSize={6} />
            <Text>+90 533 831 87 14</Text>
          </Link>
          <Link as={HStack} marginBottom={6} color="gray.500">
            <Icon as={BsAt} boxSize={8} marginLeft="-5px" />
            <Text>cephas.developer@gmail.com</Text>
          </Link>
          <Link as={HStack} marginBottom={6} color="gray.500">
            <Icon as={BsLinkedin} boxSize={6} />
            <Text>https://www.linkedin.com/in/cephas</Text>
          </Link>
        </Box>
        <Box flexBasis="50%">
          <ContactForm />
        </Box>
      </Flex>
      <Text textAlign="center" marginTop={32} color="gray.700">
        Copyright &copy; 2023
      </Text>
    </Box>
  );
};

export default Contact;
