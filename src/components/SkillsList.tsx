import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { getSkills } from "../services/skills";
import SkillCard from "./SkillCard";

const SkillsList = () => {
  const skills = getSkills();
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
        {skills.map((skill) => (
          <GridItem key={skill.id}>
            <SkillCard skill={skill} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Fade>
  );
};

export default SkillsList;
