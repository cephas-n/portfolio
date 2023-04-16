import { Box, Container } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  paddingBottom?: { [key: string]: number } | number;
  paddingTop?: { [key: string]: number } | number;
  bgColor?: { [key: string]: string } | string;
}
const Section = ({
  children,
  paddingBottom = {
    base: 14,
    md: 48,
  },
  paddingTop = {
    base: 14,
    md: 28,
  },
  bgColor,
}: Props) => {
  return (
    <Box as="section" bgColor={bgColor}>
      <Container
        maxW="container.xl"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Section;
