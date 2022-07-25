import {collection, doc, getDoc, getFirestore} from '@firebase/firestore'
import {GetServerSideProps, NextPage} from 'next'
import React, {useEffect} from 'react'
import {firebaseApp} from '../../util/firebaseApp'
import Footer from "../../components/Footer";
import {Center} from "@mantine/core";

const firestore = getFirestore(firebaseApp)

const GoToUrl: NextPage<{
    url: string
}> = (props) => {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = props.url
        }, 1000)
    }, [props.url])

    return <>
        <Center style={{width: '100%', minHeight: '10vh'}}>
            <p>You will be redirected to <a href={props.url} target={'_self'}
                                            rel={'nofollow noopener noreferrer'}>{props.url}</a> in a
                few moments...</p>
        </Center>
        <Center style={{minHeight: '10vh'}}>
            <Footer/>
        </Center>
    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id![0]
    const newCityRef = doc(collection(firestore, 'urls'), id)
    const document = await getDoc(newCityRef)
    const data = document.data()
    const url = String(data?.url)

    return {
        props: {
            url,
        },
    }
}

export default GoToUrl
