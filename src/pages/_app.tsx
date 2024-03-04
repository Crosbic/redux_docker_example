import '@/styles/globals.css'

import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

import { theme } from '@/common/theme'
import { store } from '@/redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>docker and redux example app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <Provider store={store()}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  )
}
