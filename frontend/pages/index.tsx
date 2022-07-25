import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import ShortenField from '../components/ShortenField'
import {ShortenedResultWithCopyToClipboard} from "../components/ShortenedResultWithCopyToClipboard";
import {getOrigin} from "../util/getOrigin";

const Home: NextPage = () => {
    const [shortenedUrl, setShortenedUrl] = useState<string>('')
    const router = useRouter()

    return (
        <>
            <ShortenField
                onShortened={(id) => setShortenedUrl(`${getOrigin()}${router.asPath}go/${id}`)}/>
            <ShortenedResultWithCopyToClipboard url={shortenedUrl}/>
        </>
    )
}

export default Home
