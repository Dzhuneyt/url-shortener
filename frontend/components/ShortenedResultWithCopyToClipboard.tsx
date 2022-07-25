import React from 'react'
import {useClipboard} from "@mantine/hooks";
import {Button, Grid, TextInput} from "@mantine/core";
import FileCopyIcon from '@material-ui/icons/FileCopy'
import DoneIcon from '@material-ui/icons/Done'

export const ShortenedResultWithCopyToClipboard: React.FC<{ url: string }> = (props) => {
    const clipboard = useClipboard()

    if (!props.url) {
        return <></>
    }

    return (
        <>
            <br/>
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
                                root: {height: 48, width: '100%'},
                            }}
                            onClick={() => clipboard.copy(props.url)}
                            rightIcon={clipboard.copied ? <DoneIcon/> : <FileCopyIcon/>}
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
