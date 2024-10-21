import React, { useEffect, useState } from 'react'
import NavBar from '../component/Bites/NavBar'
import Footbar from '../component/Bites/Footbar'
import { fetchMovies } from '../utility/apiCall'
import SkullLoading from './Bites/SkullLoading'
import DetailTemplate from './Bites/DetailTemplate'

export default function DetailsContainer({ url }) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState([false]);

    async function fetchDatas() {
        try {
            setIsLoading(true);
            const datas = await fetchMovies(url);
            setMovies(datas);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchDatas();
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className='bg-pink-100 py-[40px] px-3 min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative'>
                {isLoading ? <SkullLoading /> : <DetailTemplate movie={movies} />}
            </main>
            <Footbar />
        </>
    )
}
