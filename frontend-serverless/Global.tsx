import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#fff",
  secondary: "#333",
  accent: "#0ff",
  red: "#FF0039",
  yellow: "#faa916",
  purple: "#6610F2",
  blue: "#3a84df",
  lightgrey: "#f6f6f6",
  grey: "#525252",
  black: "#1e1e1e",
  maxWidth: "1200px",
  font: {
    white: "#F6F5F3",
    aqua: "#2E9E82",
    darkAqua: "#37bc9b",
  },
  bg: {
    white: "#f9f8fd",
    black: "#222",
    aqua: "#37bc9b",
    grey: "rgba(0,0,0,.1)",
  },
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Berthold';
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/Berthold-light-extended.otf') format('truetype');
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  #__next {
    height: 100%;
  }

  html, body {
    height: 100%
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family:  "Berthold", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Roboto", "Segoe UI", "lato", "Arial", "Open Sans", "sans-serif";
    font-weight: 400;
    font-feature-settings: "kern" 1;
    font-kerning: normal;
    line-height: 1.8;
    letter-spacing: 0px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: orange none;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: hidden;
  }

  *::-webkit-scrollbar-thumb {
    background-color: hidden;
    border-radius: 20px;
    border: 3px solid orange;
  }

  h1, h2, h3 {
    font-weight: 700;
    color: ${theme.black};
    text-transform: uppercase;
    margin: 0;
  }

  h2 {
    font-size: 3.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  ul, ol {
    padding-left: 2rem;
  }

  p {
    font-weight: 700;
  }

  li {
    color: ${theme.grey};
  }

  @media(max-width:490px) {
    h2 {
      font-size: 3rem; 
    }
    h3 {
      font-size: 2.2rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    p, li {
      font-size: 1.4rem;
    }
  }

  strong {
    font-weight: 800;
    color: ${theme.black};
  }

  code {
    color: ${theme.red};
    background: 1px solid #ebeaeb;
    padding: 0 6px;
  }

  a {
    text-decoration: none;
    color: ${theme.accent};
    font-weight: 600;
    transition: all 0.3s;

    &:hover {
      color: ${theme.yellow};
    }
  }

  a.link {
    text-decoration: none;
    transition: all .4s;

    &:hover {
      background-position: 0%;
    } 
  }

  .page-transition-enter {
    height: 100%;
    opacity: 0;
  }

  .page-transition-enter-active {
    height: 100%;
    opacity: 1;
    transition: opacity 300ms;
  }

  .page-transition-exit {
    height: 100%;
    opacity: 1;
  }

  .page-transition-enter-done {
    height: 100%;
  }

  .page-transition-exit-active {
    height: 100%;
    opacity: 0;
    transition: opacity 300ms;
  }
`;
