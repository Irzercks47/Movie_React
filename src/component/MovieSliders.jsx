import React from 'react'
import MovieSlider from './Bites/MovieSlider'


export default function MovieSliders({ movies }) {
    return (
        <>
            <MovieSlider title="Now Playing" to="/now-playing" datas={movies.nowPlaying} urlCategory="/movies/" />
            <MovieSlider title="Upcoming" to="/upcoming" datas={movies.upcoming} urlCategory="/movies/" />
            <MovieSlider title="Popular" to="/popular" datas={movies.popular} urlCategory="/movies/" />
        </>
    )
}
