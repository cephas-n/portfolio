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
  primary: "#E18F3B",
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
  secondary: {
    50: "#e1f8f8",
    100: "#c9e3e3",
    200: "#adcfcf",
    300: "#90baba",
    400: "#72a6a6",
    500: "#598d8d",
    600: "#436d6d",
    700: "#2d4f4f",
    800: "#173030",
    900: "#001313",
  },
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
        color: "primary",
      },
    },
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
      marginBottom: "24px",
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
      marginBottom: "60px !important",
    },
    h3: {
      fontSize: "38px !important",
      textTransform: "capitalize",
      color: "gray.200",
    },
    h4: {
      fontSize: "18px !important",
      textTransform: "uppercase",
      color: "secondary.500",
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
