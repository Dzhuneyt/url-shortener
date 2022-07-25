import { collection, doc, getDoc, getFirestore } from '@firebase/firestore'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { firebaseApp } from '../../components/firebaseApp'

const firestore = getFirestore(firebaseApp)

const GoToUrl: NextPage<{
  url: string
}> = (props) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = props.url
    }, 1000)
  }, [props.url])
  return <>You will be redirected to {props.url} in a second...</>
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
