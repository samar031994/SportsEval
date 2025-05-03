import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    return (
      <MantineProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    );
  };
  
  export default App;