import Head from 'next/head';
import React, { useEffect } from 'react';
import Navigation from '../Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStore } from '../../store';
import { useRouter } from 'next/router';
import { authenticateUser } from '../../utils/authenticateUser';

const Layout = ({ children }) => {

    const { replace } = useRouter();
    const [state, dispatch] = useStore();

    useEffect(() => {
        authenticateUser({ state, dispatch, replace });
    }, []);

    return (
        <>
            <Head>
                <title>n-News</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Navigation />
                {children}
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}

export default Layout;
