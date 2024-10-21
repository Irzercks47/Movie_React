import React from 'react'
import { Link } from 'react-router-dom'

export default function Jumbotron() {
    return (
        <>
            {/* Bakground Image */}
            <div className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60)', height: 400 + 'px' }}>
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white">
                            <h2 className="mb-4 text-4xl font-semibold">Movie App</h2>
                            <h4 className="mb-6 text-xl font-semibold">Your Trusted Movies Website</h4>
                            <button
                                type="button"
                                className="rounded border-2 border-neutral-50 px-7 pt-[10px] pb-[8px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <Link to="#reccom movies"></Link>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Background image  */}
        </>
    )
}
