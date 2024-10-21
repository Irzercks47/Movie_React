import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsContainer from '../component/DetailsContainer';
import API_ENDPOINT from '../global/api_endpoint';

export default function MovieDetails() {
    const { id } = useParams();
    return (
        <>
            <DetailsContainer url={API_ENDPOINT.DETAIL(id)} />
        </>
    )
}
