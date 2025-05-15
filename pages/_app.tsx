import React from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "../global.css";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const theme = createTheme({
    fontFamily: "open-sans, sans-serif",
  });
  return (
    <>
      <head>
        <link rel="icon" href="favicon.ico" />
        <title>Sports Psychology Report</title>
      </head>
      <MantineProvider theme={theme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    </>
  );
};

export default App;
