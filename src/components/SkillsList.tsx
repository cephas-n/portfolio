import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SkillCard from "./SkillCard";

const SkillsList = () => {
  return (
    <>
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
    </>
  );
};

export default SkillsList;
