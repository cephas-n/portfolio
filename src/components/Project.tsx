import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import enerBuildPower from "../assets/images/enerbuild-power.webp";

const Project = () => {
  return (
    <HStack spacing={24} alignItems="flex-start" marginBottom={60}>
      <Box>
        <Heading as="h3">EnerBuild Power S.A.R.L</Heading>
        <Heading as="h4">BROCURE WEBSITE DESIGN</Heading>
        <Text color="gray.600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam optio
          similique, inventore iste beatae fugit nisi velit laboriosam facere
          saepe voluptatum itaque pariatur veniam sunt accusamus numquam nostrum
          reprehenderit aperiam deleniti provident praesentium nihil placeat
          maxime suscipit! Pariatur incidunt earum molestias!
        </Text>
        <Button
          variant="link"
          marginTop={8}
          overflow="hidden"
          paddingRight={0}
          color="gray.500"
        >
          View project
          <Icon
            as={BsChevronRight}
            borderRadius={200}
            border="1px"
            boxSize={8}
            padding={1.5}
            marginLeft={4}
          />
        </Button>
      </Box>
      <Box className="project-preview">
        <Image src={enerBuildPower} width="600" />
      </Box>
    </HStack>
  );
};

export default Project;
