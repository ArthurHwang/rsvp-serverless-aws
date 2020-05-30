import React from "react";
import App, { AppProps } from "next/app";
import { Layout } from "../components/Layout";
// import useSWR from 'swr';
import NextNProgress from "nextjs-progressbar";
// import Router from 'next/router';
// import withGA from 'next-ga';

import { ThemeProvider, createGlobalStyle } from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = {
  primary: "#fff",
  secondary: "#333",
  accent: "#0ff",
  secondaryAccent: "#FF0039",
  yellow: "#faa916",
  blue: "#3B68B5",
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

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <NextNProgress
            color={theme.yellow}
            startPosition={0}
            stopDelayMs={0}
            height="2"
            style={{ zIndex: "5000" }}
          />
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ThemeProvider>
    );
  }
}

// export default withGA('UA-150992172-1', Router)(MyApp);
export default MyApp;

const GlobalStyle = createGlobalStyle`
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
    font-family:  "Berthold","-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Roboto", "Segoe UI", "lato", "Arial", "Open Sans", "sans-serif";
    font-weight: 400;
    font-feature-settings: "kern" 1;
    font-kerning: normal;
    line-height: 1.8;
    letter-spacing: 0px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    animation: fadeInAnimation ease 1.5s ;
    animation-iteration-count: 1; 
    animation-fill-mode: forwards; 
  }

  @keyframes fadeInAnimation { 
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
      } 
  }

  h1, h2, h3 {
    font-weight: bold;
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

  p {
    font-weight: 700;
  }

  li {
    color: ${theme.grey};
  }

  strong {
    font-weight: 800;
    color: ${theme.black};
  }

  code {
    color: ${theme.secondaryAccent};
    background: 1px solid #ebeaeb;
    padding: 0 6px;
  }

  a {
    text-decoration: none;
    color: ${theme.accent};
    font-weight: 600;

    &:hover {
      color: ${theme.primary};
    }
  }

  /* a.invert {
    color: ${theme.font.white};

    &:hover {
      color: ${theme.accent};
    }
  } */

  a.link {
    text-decoration: none;
    /* font-weight: 600;
    background-image: linear-gradient(to right,#37bc9b,#37bc9b 50%,${theme.blue} 50%);
    background-position: 100%;
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    /* color: ${theme.accent}; */
    transition: all .4s;

    &:hover {
      background-position: 0%;

      /* color: ${theme.primary}; */
    } 
  }

  .wedding-bg {
  background-color: #e5e5e5;
  background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%238e7700' fill-opacity='0.16' fill-rule='evenodd'/%3E%3C/svg%3E");
  }


`;
