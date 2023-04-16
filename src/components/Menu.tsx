import { Flex, HStack, Link } from "@chakra-ui/react";
import ColorModeSwicth from "./ColorModeSwicth";
import LanguageSelector from "./LanguageSelector";

const Menu = () => {
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
        <Link color="primary">
          Works
        </Link>
        <Link color="primary">
          About
        </Link>
        <Link color="primary">
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
