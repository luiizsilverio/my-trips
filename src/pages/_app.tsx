import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <title>My Trips</title> */}
        <link rel="shortcut icon" href="/img/map-icon.png" />
        <link rel="apple-touch-icon icon" href="/img/map-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />

        {/* <meta
          name="description"
          content="Mapa interativo desenvolvido em React, NextJS, Typescript"
        /> */}
        <meta
          name="theme-color"
          content="#06092B"
        />
      </Head>

      <DefaultSeo {...SEO} />

      <GlobalStyle />

      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <Component {...pageProps} />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
