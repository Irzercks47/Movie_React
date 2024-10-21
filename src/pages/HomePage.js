import React, { useEffect, useState } from 'react'
import NavBar from '../component/Bites/NavBar'
import Jumbotron from '../component/Bites/Jumbotron'
import Footbar from '../component/Bites/Footbar'
import MovieSliders from '../component/MovieSliders'
import { fetchData } from '../utility/apiCall'
import SkullLoading from '../component/Bites/SkullLoading';
import API_ENDPOINT from "../global/api_endpoint"

export default function HomePage() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState([true])
    /**********************
     * Fetch datas using 3 methode
     * setting loading image so that datas can be fetch because fetch using async
     * because !data causing bug of empty array so using (datas.length !== 0) to bypass bug of empty array
     **********************/
    async function fetchDatas() {
        const nowPlaying = await fetchData(API_ENDPOINT.NOW_PLAYING);
        const upcoming = await fetchData(API_ENDPOINT.UPCOMING);
        const popular = await fetchData(API_ENDPOINT.POPULAR);
        setIsLoading(false)
        const datas = { nowPlaying, upcoming, popular }
        if (datas.length !== 0) return setMovies(datas)
    }
    useEffect(() => {
        fetchDatas();
    }, [])
    return (
        <>
            <header>
                <NavBar />
                <Jumbotron />
            </header>
            <main className="bg-rose-200 p-[20px]">
                {isLoading ? <SkullLoading /> : <MovieSliders movies={movies} />}
            </main>
            <Footbar />
        </>
    )
}
