import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const searchWord = useRef();
    const navigate = useNavigate();
    // const [errMsg, setErrMsg] = useState([]);
    function searchData() {
        const searchValue = searchWord.current.value
        if (searchValue.length < 3) {
            alert("Need at least 3 character");
        }
        navigate(`/search/q/${searchValue}`)
    }
    return (
        <>
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-black-700 bg-white border rounded-full focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    ref={searchWord}
                />
                <button className="px-4 text-white bg-pink-600 rounded-full" onClick={searchData}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </>
    )
}
