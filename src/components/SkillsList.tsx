import { GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SkillCard from "./SkillCard";

const SkillsList = () => {
  return (
    <SimpleGrid columns={2} columnGap={24} marginTop={20}>
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
  );
};

export default SkillsList;
