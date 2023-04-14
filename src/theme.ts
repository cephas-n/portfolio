import {
  ChakraComponent,
  Colors,
  ComponentMultiStyleConfig,
  ComponentStyleConfig,
  extendTheme,
  StyleConfig,
  StyleFunctionProps,
  StyleProps,
  ThemeComponents,
  ThemeConfig,
} from "@chakra-ui/react";
import { StyledOptions } from "@emotion/styled";

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

const components: ThemeComponents = {
  Link: {
    baseStyle: {
      fontSize: "22px",
      color: "primary",
    },
  },
  Text: {
    baseStyle: {
      fontSize: "18px",
    },
  },
};

// const;
const theme = extendTheme({
  config,
  colors,
  components,
  fonts: { body: "poppins", heading: "poppins" },
});
export default theme;
