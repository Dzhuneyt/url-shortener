import {AppProps} from 'next/app'
import Head from 'next/head'
import {Box, Center, MantineProvider} from '@mantine/core'

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
                <Box
                    style={{
                        maxWidth: '1024px',
                        margin: 'auto',
                    }}
                >
                    <Center style={{minHeight: '20vh'}}>
                        <h1>URL Shortener</h1>
                    </Center>
                    <Box style={{minHeight: '70vh'}}>
                        <Component {...pageProps} />
                    </Box>
                </Box>
            </MantineProvider>
        </>
    )
}
