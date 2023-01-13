import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { validateInputFields } from '../../utils_global/validateInputFields';
import { apiCallsHandler } from '../../service_frontend/utils/apiCallsHandler';
import { useRouter } from 'next/router';
import { checkRouteProtected } from '../../service_frontend/utils/checkRouteProtected';
import { useStore } from '../../service_frontend/store';

const Signup = () => {
    const { push, replace } = useRouter();
    const [state, dispatch] = useStore();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const submitSignupForm = async (event) => {
        event.preventDefault();

        const fields = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            validateInputFields(fields);
            const signupRes = await apiCallsHandler('/user/signup', 'POST', fields);
            console.log('signupRes', signupRes);
            toast.success(signupRes?.message);
            push('/login');
        } catch (error) {
            toast.error(error?.message || error?.customMessage);
            console.log('error ', error);
        }
    }

    useEffect(() => {
        if (!state.user.authenticating) {
            checkRouteProtected({ state, dispatch, replace });
        }
    }, [state.user.authenticated]);

    return (
        <>
            <section className="text-gray-400 body-font">
                <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
                    <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
                        <div align="center">
                            <h1 className="text-3xl font-medium text-white title-font">N-News</h1>
                            <p className="mt-4 leading-relaxed">Signup and Read n number of News.</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full p-8 mt-10 bg-gray-800 bg-opacity-50 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                        <h2 className="mb-5 text-lg font-medium text-white title-font">Signup</h2>
                        <form onSubmit={submitSignupForm}>
                            <div className="relative mb-4">
                                <label htmlFor="full-name" className="text-sm leading-7 text-gray-400">Full Name</label>
                                <input type="text" id="full-name" name="full-name" className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-600 border border-gray-600 rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 focus:border-blue-500"
                                    ref={nameRef}
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="text-sm leading-7 text-gray-400">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-600 border border-gray-600 rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 focus:border-blue-500"
                                    ref={emailRef}
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="text-sm leading-7 text-gray-400">Password</label>
                                <input type="password" id="password" name="password" className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-600 border border-gray-600 rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 focus:border-blue-500"
                                    ref={passwordRef}
                                />
                            </div>
                            <button type="submit" className="px-8 py-1 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">
                                Signup
                            </button>
                        </form>
                        <p className="mt-3">Already have an account? <Link href="/login"><span className="font-bold">Login.</span></Link></p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;