import React from 'react'
import API_ENDPOINT from '../global/api_endpoint'
import Container from '../component/Container'

export default function Upcoming() {
    return (
        <>
            <Container url={API_ENDPOINT.UPCOMING} />
        </>
    )
}
