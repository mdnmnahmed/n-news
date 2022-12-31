import Link from 'next/link';
import React from 'react';

const Navigation = ({ navColor }) => {
    return (
        <>
            <header className="text-gray-400 body-font" style={{}}>
                <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                    <a className="flex items-center mb-4 font-medium text-white title-font md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        </svg>
                        <span className="ml-3 text-xl">N-News</span>
                    </a>
                    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
                        <Link href={`/`}>
                            <a className="mr-5 hover:text-white">Home</a>
                        </Link>

                        <Link href={`/user`}>
                            <a className="mr-5 hover:text-white">User</a>
                        </Link>

                        <Link href={`/post`}>
                            <a className="mr-5 hover:text-white">Posts</a>
                        </Link>

                        <Link href={`/about`}>
                            <a className="mr-5 hover:text-white">About</a>
                        </Link>
                    </nav>
                    <Link href={`/login`}>
                        <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0">
                            Login
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Navigation;