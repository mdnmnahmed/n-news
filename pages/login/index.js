import Link from 'next/link';
import React from 'react';

const Login = () => {
    return (
        <>
            <section className="text-gray-400 body-font">
                <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
                    <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
                        <div align="center">
                            <h1 className="text-3xl font-medium text-white title-font">N-News</h1>
                            <p className="mt-4 leading-relaxed">Login and Read n number of News.</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full p-8 mt-10 bg-gray-800 bg-opacity-50 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                        <h2 className="mb-5 text-lg font-medium text-white title-font">Login</h2>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="text-sm leading-7 text-gray-400">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-600 border border-gray-600 rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 focus:border-blue-500" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="text-sm leading-7 text-gray-400">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-600 border border-gray-600 rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 focus:border-blue-500" />
                        </div>
                        <button className="px-8 py-1 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">Login</button>
                        <p className="mt-3 text-xs">Don't have an account? <Link href="/signup"><a>Signup.</a></Link></p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;