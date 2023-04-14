import React from 'react'
import { Box, Heading } from '@chakra-ui/react';
import Project from './Project';

const ProjectList = () => {
  return (
    <Box>
        <Heading as="h2" marginBottom={40}>My Works</Heading>
        <Box>
            <Project />
        </Box>
        <Box>
            <Project />
        </Box>
        <Box>
            <Project />
        </Box>
    </Box>
  )
}

export default ProjectList