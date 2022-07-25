import type { NextPage } from 'next'
import ShortenInputField from '../components/ShortenInputField'

const Home: NextPage = () => {
  return (
    <ShortenInputField
      onShortened={(id) => {
        console.log(id)
      }}
    ></ShortenInputField>
  )
}

export default Home
