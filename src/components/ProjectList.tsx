import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Project, { ProjectType } from "./Project";
import { Fade } from "react-awesome-reveal";
import { getProjects } from "../services/projects";

const ProjectList = () => {
  const projects = getProjects();
  return (
    <Box>
      <Heading as="h2">My Works</Heading>
      {projects.map((project) => (
        <Fade
          direction="up"
          style={{ opacity: "0" }}
          fraction={0.1}
          triggerOnce
          key={project.id}
        >
          <Project project={project} />
        </Fade>
      ))}
    </Box>
  );
};

export default ProjectList;
