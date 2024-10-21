import React, { useEffect, useState } from 'react'
import NavBar from '../component/Bites/NavBar'
import MovieLists from '../component/MovieLists'
import Footbar from '../component/Bites/Footbar'
import { searchMovies } from '../utility/apiCall'
import SkullLoading from './Bites/SkullLoading'

export default function SearchContainer({ url, query }) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState([false]);

    async function fetchDatas() {
        try {
            setIsLoading(true);
            const datas = await searchMovies(url);
            const moviesResults = datas.results;
            setMovies(moviesResults);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchDatas();
        //eslint-disable-next-line
    }, [query])

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className='bg-pink-100 py-[40px] px-3'>
                <h2 className='font-bold italic text-2xl mb-6'>Searching : {query} </h2>
                <MovieLists movies={movies} />
                {isLoading && <SkullLoading />}
            </main>
            <Footbar />
        </>
    )
}
