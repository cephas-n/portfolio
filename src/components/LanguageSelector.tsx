import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Flex,
  Text,
  HStack,
} from "@chakra-ui/react";
import ukFlag from "../assets/images/uk.webp";

const LanguageSelector = () => {
  return (
    <Menu>
      <MenuButton>
        <HStack>
          <Text marginBottom={0}>English</Text>
          <Image src={ukFlag} boxSize={5} />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem>French</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
