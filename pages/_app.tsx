import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import wrapper from "../store/cofigureStore";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Head>
        <title>template</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        ></meta>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
        </style>
      </Head>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default wrapper.withRedux(MyApp);

const GlobalStyle = createGlobalStyle`
   
`;
