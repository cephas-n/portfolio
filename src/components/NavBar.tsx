import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Switch,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";
import ColorModeSwicth from "./ColorModeSwicth";
import LanguageSelector from "./LanguageSelector";

const NavBar = () => {
  return (
    <HStack
      justifyContent="space-between"
      padding={4}
      borderBottom="1px"
      borderColor="whiteAlpha.200"
    >
      <Image src={logo} boxSize={16} />
      <HStack spacing={12}>
        <Link variant="link" color="primary">
          Works
        </Link>
        <Link variant="link" color="primary">
          About
        </Link>
        <Link variant="link" color="primary">
          Contact
        </Link>
      </HStack>
      <HStack spacing={8}>
        <ColorModeSwicth />
        <LanguageSelector />
      </HStack>
    </HStack>
  );
};

export default NavBar;
