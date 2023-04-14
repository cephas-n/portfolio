import { Container } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  paddingBottom?: { [key: string]: number };
  paddingTop?: { [key: string]: number };
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
}: Props) => {
  return (
    <Container
      as="section"
      maxW="container.xl"
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      {children}
    </Container>
  );
};

export default Section;
