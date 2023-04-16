import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Project from "./Project";
import { Fade } from "react-awesome-reveal";

const ProjectList = () => {
  return (
    <Box>
      <Heading as="h2">My Works</Heading>
      <Box>
        <Fade direction="up" style={{ opacity: "0" }} fraction={0.1} triggerOnce>
          <Project />
        </Fade>
      </Box>
      <Box>
        <Fade direction="up" style={{ opacity: "0" }} triggerOnce>
          <Project />
        </Fade>
      </Box>
      <Box>
        <Fade direction="up" style={{ opacity: "0" }} triggerOnce>
          <Project />
        </Fade>
      </Box>
    </Box>
  );
};

export default ProjectList;
