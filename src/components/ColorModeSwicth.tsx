import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwicth = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark" ? true : false}
        colorScheme={colorMode === "dark" ? "green" : ""}
        onChange={toggleColorMode}
      />
      <Text>Dark</Text>
    </HStack>
  );
};

export default ColorModeSwicth;
