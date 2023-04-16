import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import myPhoto from "../assets/images/me.webp";

const Hero = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="flex-end"
      minHeight={{
        base: "400px",
        sm: "500px",
      }}
      position="relative"
    >
      <Heading
        as="h1"
        position="absolute"
        top={{
          base: "0%",
          md: "2%",
          lg: "30%",
        }}
        left="7%"
        width="min-content"
        lineHeight={{
          base: 0.9,
          sm: 1.2,
        }}
        fontWeight="semibold"
        fontSize={{ base: "5xl", sm: "6xl" }}
      >
        <Text as="span" fontSize="inherit">
          Cephas
        </Text>
        <Text
          as="span"
          fontSize="inherit"
          display="block"
          marginLeft={{
            base: 20,
            sm: 24,
            lg: 24,
          }}
        >
          Naweji
        </Text>
      </Heading>
      <Box className="hero-image">
        <Image src={myPhoto} width={600} boxShadow="1px" />
      </Box>
      <Text
        fontSize={24}
        position="absolute"
        bottom={{
          base: "-10%",
          md: "15%",
          lg: "30%",
        }}
        left="68%"
      >
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
