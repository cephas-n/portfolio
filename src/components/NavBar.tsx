import { HStack, Image, Show, useBoolean } from "@chakra-ui/react";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../assets/images/logo.webp";
import FloatingMenu from "./FloatingMenu";
import Menu from "./Menu";

const NavBar = () => {
  const [showMenu, toogleMenu] = useBoolean(false);

  return (
    <HStack
      justifyContent="space-between"
      paddingY={{
        base: 4,
        md: 8,
      }}
      borderBottom="1px"
      _dark={{ borderColor: "whiteAlpha.200" }}
      _light={{ borderColor: "blackAlpha.100" }}
      className="navbar"
    >
      <Image
        src={logo}
        boxSize={12}
        filter="auto"
        _light={{ brightness: "10%" }}
      />
      <Show above="md">
        <Menu />
      </Show>
      <Show below="md">
        {showMenu && (
          <FloatingMenu toggleMenu={toogleMenu}>
            <Menu />
          </FloatingMenu>
        )}
      </Show>
      <Show below="md">
        <RiMenu3Fill size={20} onClick={toogleMenu.toggle} />
      </Show>
    </HStack>
  );
};

export default NavBar;
