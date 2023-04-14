import { Colors, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors: Colors = {
  gray: {
    100: "#F8F9FA",
    200: "#E9ECEF",
    300: "#DEE2E6",
    400: "#CED4DA",
    500: "#ADB5BD",
    600: "#6C757D",
    700: "#495057",
    800: "#100F1B",
    900: "#000000",
  },
  primary: "#E18F3B",
  secondary: "#588B8B",
  dark: "#100F1B",
};

const theme = extendTheme({ config, colors });
export default theme;
