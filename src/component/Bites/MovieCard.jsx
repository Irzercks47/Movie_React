import React from 'react'
import CONFIG from '../../global/config'
import { Link } from 'react-router-dom'
import { movieUrlGenerator } from '../../utility/utilFunction'

export default function MovieCard({ movie, to }) {
    return (
        <>
            <div className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                <div className="max-h-[450px]">
                    <Link to={movieUrlGenerator(to, movie.id)}>
                        <img className="rounded-t-lg max-h-[450px]" src={CONFIG.BASE_IMAGE_URL + movie.poster_path} alt={movie.original_title} />
                    </Link>
                </div>
                <div className="p-5 h-[120px]">
                    <Link to={movieUrlGenerator(to, movie.id)}>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                    </Link>
                    <small className='text-white'>{new Date(movie.release_date).toLocaleString(CONFIG.DEFAULT_LANGUAGE, CONFIG.LOCAL_TIME_SETTING)}
                    </small>
                </div>
            </div >
        </>
    )
}
