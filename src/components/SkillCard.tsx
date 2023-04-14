import { Box, HStack, Image, Progress, Text } from "@chakra-ui/react";
import jsIcon from "../assets/images/js.png";

const SkillCard = () => {
  return (
    <Box marginBottom={6}>
      <HStack>
        <Image src={jsIcon} boxSize={6} />
        <Text textTransform="uppercase" color="gray.500">
          Javascript
        </Text>
      </HStack>
      <Progress
        value={80}
        borderRadius={24}
        marginTop={2}
        colorScheme="secondary"
        height={{
          base: "8px",
          md: "10px",
        }}
      />
    </Box>
  );
};

export default SkillCard;
