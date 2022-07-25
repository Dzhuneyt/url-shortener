import React, {useCallback, useState} from 'react'
import {Button, Grid, TextInput, TextInputProps,} from '@mantine/core'
import PublicIcon from '@material-ui/icons/Public';
import axios from 'axios'

interface ShortenInputFieldProps extends TextInputProps {
    onShortened: (id: string) => unknown
}

export default function ShortenField(props: ShortenInputFieldProps) {
    const [url, setUrl] = useState<string>('')

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
                    icon={<PublicIcon/>}
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
                        root: {height: 48, width: '100%'},
                    }}
                    onClick={() => shorten()}
                >
                    Shorten
                </Button>
            </Grid.Col>
        </Grid>
    )
}
