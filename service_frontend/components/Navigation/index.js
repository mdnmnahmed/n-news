import Link from 'next/link';
import React from 'react';
import { useStore } from '../../store';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { authConstants } from '../../store/constants';

const Navigation = ({ navColor }) => {

    const { replace } = useRouter();
    const [state, dispatch] = useStore();

    const logoutHandler = async (event) => {
        event.preventDefault();
        await signOut({ redirect: false });
        dispatch({ type: authConstants.LOGIN_FAILURE });
        replace('/login');
    }

    return (
        <>
            <header className="text-gray-400 body-font">
                <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
                    <div className="flex items-center flex-shrink-0 mr-6 text-white">
                        <img src="../images/n-news.svg" width="30" />
                        <span className="ml-4 text-xl font-semibold tracking-tight">N-News</span>
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className="flex-grow hidden block w-full lg:flex lg:items-center lg:w-auto md:block">
                        <div className="text-sm lg:flex-grow">
                            <Link href={`/`} className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
                                Home
                            </Link>
                            <Link href={`/news`} className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
                                News
                            </Link>
                        </div>
                        <div>
                            {state?.user?.authenticated ? (
                                <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </button>
                            ) : (
                                    <Link href={`login`} className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0">
                                    Login
                                    </Link>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navigation;