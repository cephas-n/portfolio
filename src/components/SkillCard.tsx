import { Box, HStack, Image, Progress, Text } from "@chakra-ui/react";
import jsIcon from "../assets/images/js.png";
import { SkillType } from "../services/skills";

interface Props {
  skill: SkillType;
}

const SkillCard = ({ skill }: Props) => {
  return (
    <Box marginBottom={6}>
      <HStack>
        <Image src={skill.img} boxSize={{ base: 4, sm: 5 }} />
        <Text
          textTransform="uppercase"
          color="gray.600"
          fontSize={{
            base: "14px",
            sm: "16px",
          }}
        >
          {skill.name}
        </Text>
      </HStack>
      <Progress
        value={skill.level}
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
