import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import ShortenField from '../components/ShortenField'
import {ShortenedResultWithCopyToClipboard} from "../components/ShortenedResultWithCopyToClipboard";
import {getOrigin} from "../util/getOrigin";
import {Center} from "@mantine/core";
import Footer from "../components/Footer";

const Home: NextPage = () => {
    const [shortenedUrl, setShortenedUrl] = useState<string>('')
    const router = useRouter()

    return (
        <>
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
