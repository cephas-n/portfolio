import { Flex, HStack, Link } from "@chakra-ui/react";
import ColorModeSwicth from "./ColorModeSwicth";
import LanguageSelector from "./LanguageSelector";
import { ChakraBooleanHook } from "../@types/useBoolean.d";

interface Props {
  toggleMenu: () => void;
}

const Menu = ({ toggleMenu }: Props) => {
  return (
    <>
      <Flex
        gap={{
          base: 4,
          md: 12,
        }}
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        <Link color="primary" href="#work" onClick={toggleMenu}>
          Works
        </Link>
        <Link color="primary" href="#about" onClick={toggleMenu}>
          About
        </Link>
        <Link color="primary" href="#contact" onClick={toggleMenu}>
          Contact
        </Link>
      </Flex>
      <HStack spacing={8}>
        <ColorModeSwicth />
        <LanguageSelector />
      </HStack>
    </>
  );
};

export default Menu;
