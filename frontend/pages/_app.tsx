import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
        }}
      >
        <div
          style={{
            maxWidth: '1024px',
            margin: 'auto',
          }}
        >
          <h1>URL Shortener</h1>
          <Component {...pageProps} />
        </div>
      </MantineProvider>
    </>
  )
}
