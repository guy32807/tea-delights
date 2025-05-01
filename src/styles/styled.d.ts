import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      circle: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    transitions: {
      default: string;
      fast: string;
      slow: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      accent: string;
      background: string;
      text: string;
      lightText: string;
    };
    typography: {
      fontFamily: string;
      headingFont: string;
      fontSizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        display1: string;
        display2: string;
      };
      fontWeights: {
        light: number;
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
      };
      lineHeights: {
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
    breakpoints: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  }
}