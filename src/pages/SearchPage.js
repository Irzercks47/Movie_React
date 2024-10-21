import React from 'react'
import SearchContainer from '../component/SearchContainer'
import API_ENDPOINT from '../global/api_endpoint'
import { useParams } from 'react-router-dom'


export default function SearchPage() {
    const { query } = useParams()
    return (
        <>
            <SearchContainer url={API_ENDPOINT.SEARCH(query)} query={query} />
        </>
    )
}
