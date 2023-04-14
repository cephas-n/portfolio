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
  Button: {
    baseStyle: {
      fontWeight: "400",
      borderRadius: 0,
    },
    variants: {
      outline: {
        color: "primary"
      }
    }
  },
  Link: {
    baseStyle: {
      fontSize: "22px",
      color: "primary",
    },
  },
  Text: {
    baseStyle: {
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "30px",
    },
  },
};

const styles = {
  global: {
    h2: {
      fontSize: "52px !important",
      textTransform: "uppercase",
      color: "primary",
      textAlign: "center",
      marginBottom: "60px",
    },
    h3: {
      fontSize: "38px !important",
      textTransform: "capitalize",
      color: "gray.200",
    },
    h4: {
      fontSize: "18px !important",
      textTransform: "uppercase",
      color: "secondary",
      marginTop: "10px",
      marginBottom: "24px",
      fontWeight: "400 !important",
    },
  },
};

// const;
const theme = extendTheme({
  config,
  colors,
  components,
  fonts: { body: "poppins", heading: "poppins" },
  styles,
});
export default theme;
