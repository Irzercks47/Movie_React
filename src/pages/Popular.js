import React from 'react'
import Container from '../component/Container'
import API_ENDPOINT from '../global/api_endpoint'

export default function Popular() {
    return (
        <>
            <Container url={API_ENDPOINT.POPULAR} />
        </>
    )
}
