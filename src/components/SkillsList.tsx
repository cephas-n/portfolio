import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import SkillCard from "./SkillCard";

const SkillsList = () => {
  return (
    <Fade triggerOnce style={{ opacity: 0 }}>
      <Heading as="h2">Skills</Heading>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        columnGap={24}
        marginTop={20}
      >
        <GridItem>
          <SkillCard />
        </GridItem>
        <GridItem>
          <SkillCard />
        </GridItem>
        <GridItem>
          <SkillCard />
        </GridItem>
        <GridItem>
          <SkillCard />
        </GridItem>
        <GridItem>
          <SkillCard />
        </GridItem>
        <GridItem>
          <SkillCard />
        </GridItem>
      </SimpleGrid>
    </Fade>
  );
};

export default SkillsList;
