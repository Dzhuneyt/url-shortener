import {AppProps} from 'next/app'
import Head from 'next/head'
import {MantineProvider} from '@mantine/core'

export default function App(props: AppProps) {
    const {Component, pageProps} = props

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
                    /** Put your theme override here */
                    colorScheme: 'light',
                }}
            >
                <div
                    style={{
                        maxWidth: '1024px',
                        margin: 'auto',
                        minHeight: '100vh'
                    }}
                >
                    <h1>URL Shortener</h1>
                    <Component {...pageProps} />
                </div>
            </MantineProvider>
        </>
    )
}
