import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#2E7D32', // Forest green (tea-inspired)
    secondary: '#795548', // Brown (tea-inspired)
    tertiary: '#FFF9C4', // Light yellow (tea-inspired)
    accent: '#FFE0B2', // Light orange (tea-inspired)
    background: '#F5F5F5',
    text: '#333333',
    lightText: '#757575',
  },
  typography: {
    fontFamily: "'Lato', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    headingFont: "'Playfair Display', serif",
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
      display1: '2.5rem',
      display2: '3rem',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600, // Add this line
      bold: 700,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem', // Add this line
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%', // Add this line
  },
  breakpoints: {
    small: '576px',
    medium: '768px',
    large: '992px',
    xlarge: '1200px',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.15)',
    large: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },
};

export default theme;