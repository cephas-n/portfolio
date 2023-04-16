import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
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
      <Fade cascade damping={0.1} style={{ opacity: 0 }}>
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
            base: 1,
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
              base: "78px",
              sm: 24,
              lg: 24,
            }}
          >
            Naweji
          </Text>
        </Heading>
      </Fade>
      <Box className="hero-image">
        <Image src={myPhoto} width={600} boxShadow="1px" />
      </Box>
      <Box
        as="p"
        position="absolute"
        bottom={{
          base: "-10%",
          md: "15%",
          lg: "25%",
        }}
        left="68%"
        display="inline-block"
      >
        <Fade cascade direction="up" style={{ opacity: 0 }}>
          <Text as="span" fontSize={24}>
            I'm a{" "}
          </Text>
          <Text as="span" color="primary" fontSize={24}>
            Web developer
          </Text>
          <Text as="span" fontSize={24}>
            with 3+ years of Experience
          </Text>
        </Fade>
      </Box>
    </Flex>
  );
};

export default Hero;
