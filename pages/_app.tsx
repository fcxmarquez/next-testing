import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
