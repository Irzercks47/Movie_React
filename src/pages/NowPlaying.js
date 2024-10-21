import React from 'react'
import API_ENDPOINT from '../global/api_endpoint'
import Container from '../component/Container'

export default function NowPlaying() {
    return (
        <>
            <Container url={API_ENDPOINT.NOW_PLAYING} />
        </>
    )
}
