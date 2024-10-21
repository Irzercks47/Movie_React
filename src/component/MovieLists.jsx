import React from 'react'
import MovieCard from './Bites/MovieCard'

export default function MovieLists({ movies }) {
    return (
        <div className=" flex flex-wrap p-1.5 gap-4 items-center justify-center">
            {movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} to='/movies/' />
            })}
        </div>
    )
}
