import { Flex, Icon, StyleProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiCloseFill } from "react-icons/ri";
import { ChakraBooleanHook } from "../@types/useBoolean";
import { StyledOptions } from "@emotion/styled";

interface Props {
  children: ReactNode;
  toggleMenu: () => void;
}
const FloatingMenu = ({ children, toggleMenu }: Props) => {
  const styles: StyleProps = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    gap: 32,
    zIndex: 1000,
    marginInlineStart: "0px !important",
  };

  return (
    <Flex
      {...styles}
      _dark={{ bgColor: "gray.800" }}
      _light={{ bgColor: "gray.100" }}
    >
      <Icon
        as={RiCloseFill}
        position="absolute"
        top={4}
        right={4}
        boxSize={8}
        color="gray.600"
        onClick={toggleMenu}
      />
      {children}
    </Flex>
  );
};

export default FloatingMenu;
