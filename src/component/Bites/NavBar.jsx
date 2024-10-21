import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function NavBar() {
    function shwNav() {
        const navLinks = document.querySelectorAll('.navlinks')[0]
        navLinks.classList.toggle('hidden')
    }
    /***********************************************************************************************
        Pada bagian custom link ini dia akan mendapatkan parameter to, children, dan props
        dimana children ini akan mengambil isi dari tag 
        kemudian to ini akan mengambil route nya
        props ini akan mengambil properti yang ada di custom tag seperti className
    ************************************************************************************************/
    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })

        return (
            <Link to={to} className={isActive ? "active block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-10 text-xl" : "block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-10 text-xl"}>
                {children}
            </Link>
        )
    }

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-pink-900 p-3">
                <Link to="/" className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-semibold text-xl tracking-tight">Movie App</span>
                </Link>
                <Link to="/test"> </Link>
                <div className="block lg:hidden border-2 shwbutton" onClick={shwNav}>
                    <button className="flex items-center px-4 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white min-w-[44px] min-h-[44px]">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden navlinks">
                    <div className="text-md lg:flex-grow mx-auto px-2">
                        {/* <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-10 text-xl">
                            Now Playing
                        </Link>
                        <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-10 text-xl">
                            Upcoming
                        </Link>
                        <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white text-xl">
                            Popular
                        </Link> */}
                        <CustomLink to="/now-playing">Now Playing</CustomLink>
                        <CustomLink to="/upcoming">Upcoming</CustomLink>
                        <CustomLink to="/popular">Popular</CustomLink>
                    </div>
                    <div className="flex items-center md:mt-1 md:ml-1 mt-4 lg:mt-0">
                        <SearchBar />
                    </div>
                </div>
            </nav>
        </>
    )
}

