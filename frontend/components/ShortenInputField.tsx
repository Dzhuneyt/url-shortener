import React, { useCallback, useState } from 'react'
import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  Button,
  Group,
  Grid,
} from '@mantine/core'
import Http from '@material-ui/icons/Http'
import PlayArrow from '@material-ui/icons/PlayArrow'
import axios from 'axios'
import { useRouter } from 'next/router'

interface ShortenInputFieldProps extends TextInputProps {
  onShortened: (id: string) => unknown
}

export default function ShortenInputField(props: ShortenInputFieldProps) {
  const [url, setUrl] = useState<string>('')

  const theme = useMantineTheme()
  const onShortened = props.onShortened

  const shorten = useCallback(() => {
    axios
      .post('/api/shorten', {
        url,
      })
      .then((result) => {
        onShortened(result.data.id)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [url, onShortened])

  return (
    <Grid grow>
      <Grid.Col span={10}>
        <TextInput
          icon={<Http />}
          radius="xl"
          size="md"
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL"
        />
      </Grid.Col>
      <Grid.Col span={2}>
        <Button
          variant="light"
          radius="xl"
          size="md"
          styles={{
            root: { height: 48, width: '100%' },
          }}
          onClick={() => shorten()}
        >
          Shorten
        </Button>
      </Grid.Col>
    </Grid>
  )
}
