import { Button, Grid, TextInput } from '@mantine/core'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useClipboard } from '@mantine/hooks'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import DoneIcon from '@material-ui/icons/Done'
import ShortenInputField from '../components/ShortenInputField'

const ShortenedLinkCopiable: React.FC<{ url: string }> = (props) => {
  const clipboard = useClipboard()

  if (!props.url) {
    return <></>
  }

  return (
    <>
      <br />
      <p>Use this shortened link to visit the original URL:</p>
      <div>
        <Grid grow>
          <Grid.Col span={7}>
            <TextInput
              radius="xl"
              size="md"
              readOnly={true}
              value={props.url}
            />
          </Grid.Col>
          <Grid.Col span={5}>
            <Button
              variant="light"
              radius="xl"
              size="md"
              styles={{
                root: { height: 48, width: '100%' },
              }}
              onClick={() => clipboard.copy(props.url)}
              rightIcon={clipboard.copied ? <DoneIcon /> : <FileCopyIcon />}
            >
              {clipboard.copied
                ? 'Link copied to clipboard'
                : 'Copy link to clipboard'}
            </Button>
          </Grid.Col>
        </Grid>
      </div>
    </>
  )
}

function getOrigin() {
  return typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : ''
}

const Home: NextPage = () => {
  const [shortenedUrl, setShortenedUrl] = useState<string>('')
  const router = useRouter()

  return (
    <>
      <ShortenInputField
        onShortened={(id) => {
          setShortenedUrl(`${getOrigin()}${router.asPath}go/${id}`)
        }}
      ></ShortenInputField>
      <ShortenedLinkCopiable url={shortenedUrl} />
    </>
  )
}

export default Home
