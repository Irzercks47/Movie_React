import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../utility/apiCall'
import MovieSliders from "../component/MovieSliders"
import SkullLoading from '../component/template/SkullLoading';
import API_ENDPOINT from "../global/api_endpoint"


export default function Test() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState([true])
    async function fetchDatas() {
        const nowPlaying = await fetchMovies(API_ENDPOINT.NOW_PLAYING);
        const upcoming = await fetchMovies(API_ENDPOINT.UPCOMING);
        const popular = await fetchMovies(API_ENDPOINT.POPULAR);
        setIsLoading(false)
        const datas = { nowPlaying, upcoming, popular }
        if (datas.length !== 0) return setMovies(datas)
    }
    useEffect(() => {

        fetchDatas();

    }, [])
    return (
        <>
            {/* <MovieSliders movies={movies} /> */}
            {isLoading ? <SkullLoading /> : <MovieSliders movies={movies} />}
        </>
    )
}
