import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.headingFont};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    line-height: ${({ theme }) => theme.typography.lineHeights.tight};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.typography.fontSizes.display1};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.typography.fontSizes.display2};
  }
  
  h3 {
    font-size: 1.5rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      font-size: 1.35rem;
    }
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  ul, ol {
    margin-left: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  a {
    text-decoration: none;
    color: inherit;
    transition: color ${({ theme }) => theme.transitions.default};
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: inline-block;
  }
  
  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
  
  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }
  
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  
  /* For accessibility */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  /* Layout */
  main {
    min-height: 70vh;
  }
  
  /* Container widths */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

export default GlobalStyles;