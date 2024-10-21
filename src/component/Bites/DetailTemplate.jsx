import React from 'react'
import CONFIG from '../../global/config'

export default function DetailTemplate({ movie }) {
    return (
        <>
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <img src={CONFIG.BASE_IMAGE_URL + movie.poster_path} alt={movie.title} className="w-full relative z-10 border-2 border-black" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            <h1 className="font-bold uppercase text-2xl mb-5">{movie.title}</h1>
                            <p className="text-sm">{movie.overview}</p>
                            <p className="text-sm mt-4">Release date : {new Date(movie.release_date).toLocaleString(CONFIG.DEFAULT_LANGUAGE, CONFIG.LOCAL_TIME_SETTING)}</p>
                        </div>
                        <div>
                            <div className="mr-5 flex gap-2">
                                {movie.genres.map(genre => {
                                    return <div key={genre.id} className="bg-pink-300 opacity-75 hover:opacity-100 text-pink-900 rounded-full px-4 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>{genre.name}</div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
