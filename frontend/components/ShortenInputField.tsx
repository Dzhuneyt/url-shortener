import React, { useCallback, useState } from 'react'
import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
} from '@mantine/core'
import Http from '@material-ui/icons/Http'
import PlayArrow from '@material-ui/icons/PlayArrow'
import axios from 'axios'
import { useRouter } from 'next/router'

interface ShortenInputFieldProps extends TextInputProps {
  onShortened: (id: string) => unknown
}

export default function ShortenInputField(props: ShortenInputFieldProps) {
  const theme = useMantineTheme()
  const router = useRouter()

  const [url, setUrl] = useState<string>('')
  const [shortenedUrl, setShortenedUrl] = useState<string>('')

  const save = useCallback(() => {
    axios
      .post('/api/shorten', {
        url,
      })
      .then((result) => {
        const origin =
          typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : ''
        setShortenedUrl(`${origin}${router.asPath}go/${result.data.id}`)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [url, router])

  return (
    <>
      <TextInput
        icon={<Http />}
        radius="xl"
        size="md"
        onChange={(e) => {
          setUrl(e.target.value)
        }}
        rightSection={
          <ActionIcon
            size={32}
            radius="xl"
            color={theme.primaryColor}
            variant="filled"
            onClick={() => save()}
          >
            <PlayArrow />
          </ActionIcon>
        }
        placeholder="URL"
        rightSectionWidth={42}
        {...props}
      />
      {shortenedUrl && (
        <>
          <br />
          <TextInput
            radius="xl"
            size="md"
            readOnly={true}
            placeholder="URL"
            rightSectionWidth={42}
            value={shortenedUrl}
          />
        </>
      )}
    </>
  )
}
