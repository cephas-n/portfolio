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
    750: "#100F1B",
    800: "#000814",
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
  // dark: "#100F1B",
  dark: {
    50: "#efeff6",
    100: "#d0cfdf",
    200: "#b0aeca",
    300: "#928db7",
    400: "#726ca4",
    500: "#59538c",
    600: "#45416c",
    700: "#322f4c",
    800: "#100F1B",
    900: "#0a0910",
  },
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
      fontSize: ["16px", "16px", "18px"],
      fontWeight: "400",
      lineHeight: "30px",
      marginBottom: ["10px", "10px", "24px"],
    },
  },
};

const styles = {
  global: {
    h2: {
      fontSize: ["48px !important", "48px !important", "52px !important"],
      textTransform: "uppercase",
      color: "primary",
      textAlign: "center",
      marginBottom: ["30px !important", "30px !important", "60px !important"],
    },
    h3: {
      fontSize: ["28px !important", "28px !important", "38px !important"],
      textTransform: "capitalize",
      color: "gray.200",
    },
    h4: {
      fontSize: ["16px !important", "18px !important"],
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
