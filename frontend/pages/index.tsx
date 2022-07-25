import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import ShortenField from '../components/ShortenField'
import {ShortenedResultWithCopyToClipboard} from "../components/ShortenedResultWithCopyToClipboard";
import {getOrigin} from "../util/getOrigin";
import {Center} from "@mantine/core";
import Footer from "../components/Footer";
import Head from 'next/head';

const Home: NextPage = () => {
    const [shortenedUrl, setShortenedUrl] = useState<string>('')
    const router = useRouter()

    return (
        <>
            <Head>
                <title>URL shortener - gotogo.click</title>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="URL Shortener"/>
                <meta property="og:description" content="Shortening URLs - made easy"/>
                <meta property="og:image" content="https://gotogo.click/photo-1517404215738-15263e9f9178.jpeg"/>
            </Head>
            <div>
                <ShortenField
                    onShortened={(id) => setShortenedUrl(`${getOrigin()}${router.asPath}go/${id}`)}/>
                <ShortenedResultWithCopyToClipboard url={shortenedUrl}/>
            </div>
            <Center style={{minHeight: '10vh'}}>
                <Footer/>
            </Center>
        </>
    )
}

export default Home
