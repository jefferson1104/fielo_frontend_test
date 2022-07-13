import type { AppProps } from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import { Fragment } from 'react'
import NProgress from 'nprogress'

import GlobalStyles from 'styles/global'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>NewRoots</title>
        <link rel="shortcut icon" href="/img/icon-341.png" />
        <link rel="apple-touch-icon" href="/img/icon-341.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="nprogress.css" />
        <meta name="description" content="Fielo Test for Front End Engineer" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
