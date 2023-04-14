import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import myPhoto from "../assets/images/me.webp";

const Hero = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="flex-end"
      minHeight="75vh"
      position="relative"
    >
      <Heading
        as="h1"
        position="absolute"
        top="35%"
        left="7%"
        width="min-content"
        lineHeight={0.9}
        fontWeight="semibold"
      >
        <Text as="span" fontSize="7xl">
          Cephas
        </Text>
        <Text as="span" fontSize="7xl" display="block" marginLeft={40}>
          Naweji
        </Text>
      </Heading>
      <Box className="hero-image">
        <Image src={myPhoto} width={600} boxShadow="1px" />
      </Box>
      <Text fontSize={24} position="absolute" bottom="30%" left="68%">
        I'm a{" "}
        <Text as="span" color="primary" fontSize={24}>
          Web developer
        </Text>{" "}
        with 3+ years of Experience
      </Text>
    </Flex>
  );
};

export default Hero;
