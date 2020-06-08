import React from "react";
import App, { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";
import { GlobalStyle, theme } from "../Global";
import { ThemeProvider } from "styled-components";
import { PageTransition } from "next-page-transitions";
// import { Loading } from '../components/Loading';

// import useSWR from 'swr';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NextNProgress
          color={theme.yellow}
          startPosition={0}
          stopDelayMs={0}
          height="2"
          style={{ zIndex: "5000" }}
        />
        <PageTransition
          timeout={300}
          key={router.route}
          classNames="page-transition"
          loadingClassNames="loading-indicator"
        >
          <Layout>
            <Component {...pageProps} key={router.route} />
            <style jsx global>{``}</style>
            <Footer />
          </Layout>
        </PageTransition>
      </ThemeProvider>
    );
  }
}

export default MyApp;
