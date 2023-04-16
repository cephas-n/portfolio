import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { Fade, Zoom } from "react-awesome-reveal";
import { BsChevronRight } from "react-icons/bs";
import enerBuildPower from "../assets/images/enerbuild-power.webp";

const Project = () => {
  return (
    <HStack
      spacing={{
        base: 0,
        lg: 24,
      }}
      alignItems="flex-start"
      marginBottom={{
        base: 28,
        lg: 60,
      }}
      flexWrap={{
        base: "wrap",
        lg: "nowrap",
      }}
    >
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
          variant="outline"
          marginTop={8}
          overflow="hidden"
          color="gray.500"
          borderColor="primary"
          paddingY={6}
          borderRadius="md"
          transform="auto"
          transition="ease-in-out .3s"
          _hover={{
            scale: 1.1,
            marginLeft: 4,
          }}
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
      <Box
        className="project-preview"
        textAlign="center"
        flex={{
          base: 1,
          lg: "initial",
        }}
      >
        <Zoom style={{ zoom: 0 }} delay={500} triggerOnce>
          <Image
            src={enerBuildPower}
            display="block"
            marginX="auto"
            width={{
              base: "100%",
              md: "600px",
              lg: "100%",
            }}
            marginTop={{
              base: 6,
              md: 12,
              lg: 0,
            }}
          />
        </Zoom>
      </Box>
    </HStack>
  );
};

export default Project;
