import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NewRoots</title>
        <link rel="shortcut icon" href="/img/icon-341.png" />
        <link rel="apple-touch-icon" href="/img/icon-341.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Fielo Test for Front End Engineer" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
