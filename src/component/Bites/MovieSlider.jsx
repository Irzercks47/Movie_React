import React from 'react'
import "../../style/movieslider.css"
import { Link } from 'react-router-dom'
import CONFIG from "../../global/config"
import { movieUrlGenerator } from '../../utility/utilFunction'

export default function MovieSlider({ to, title, urlCategory, ...datas }) {
    datas = datas.datas.results
    return (
        <>
            <div className="row mb-[70px]">
                <div className="header flex justify-between items-center">
                    <Link to={to} className="title text-4xl m-0 text-black font-semibold">{title}</Link>
                    <div className="progress-bar flex gap-1"></div>
                </div>
                <div className="container flex justify-center overflow-x-auto">
                    <div className="slider flex grow">
                        {datas.map(data => {
                            return <Link className='card' key={data.id} to={movieUrlGenerator(urlCategory, data.id)}>
                                <img src={CONFIG.BASE_IMAGE_URL + data.poster_path} alt={data.original_title} className='object-fill mb-1'></img>
                                <span className='items-center'>{data.title}</span>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
