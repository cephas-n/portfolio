import { Box, Container } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  paddingBottom?: { [key: string]: number } | number;
  paddingTop?: { [key: string]: number } | number;
  bgColor?: { [key: string]: string } | string;
  _dark?: { [key: string]: string | number };
  _light?: { [key: string]: string | number };
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
  _dark,
  _light
}: Props) => {
  return (
    <Box as="section" bgColor={bgColor} _dark={_dark} _light={_light} >
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
