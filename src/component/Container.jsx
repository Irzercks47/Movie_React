import React, { useEffect, useState } from 'react'
import NavBar from '../component/Bites/NavBar'
import MovieLists from '../component/MovieLists'
import Footbar from '../component/Bites/Footbar'
import { fetchData } from '../utility/apiCall'
import SkullLoading from './Bites/SkullLoading'

export default function Container({ url }) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState([false]);
    const [page, setPage] = useState(1);

    async function fetchDatas() {
        try {
            setIsLoading(true);
            const datas = await fetchData(url, page);
            const moviesResults = datas.results;
            movies.length === 0 ? setMovies(moviesResults) : setMovies(prevMovies => [...prevMovies, ...moviesResults]);
            setPage(prevPage => prevPage + 1);
        } finally {
            setIsLoading(false);
        }
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchDatas();
    };

    useEffect(() => {
        fetchDatas();
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        setTimeout(window.addEventListener('scroll', handleScroll), 300);
        return () => window.removeEventListener('scroll', handleScroll);
        //eslint-disable-next-line
    }, [isLoading]);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className='bg-pink-100 py-[40px] px-3'>
                <MovieLists movies={movies} />
                {isLoading && <SkullLoading />}
            </main>
            <Footbar />
        </>
    )
}
