import React from 'react';

const TwoDivsBc = () => {
    return (
        <>
            <section>
                <div data-aos="zoom-in" className="mt-16 text-center">
                    <h1 className="text-2xl font-semibold text-darken">Latest News and Resources</h1>
                    <p className="my-5 text-gray-500">See the developments that have occurred to Skillines in the world</p>
                </div>
                <div data-aos="zoom-in-up" className="flex flex-col my-14 lg:flex-row lg:space-x-20">
                    <div className="lg:w-6/12">
                        <img className="w-full mb-6" src="img/laptop-news.png" />
                        <span className="px-4 py-px text-sm font-semibold bg-yellow-300 rounded-full text-darken">NEWS</span>
                        <h1 className="my-3 text-xl font-semibold text-gray-800">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h1>
                        <p className="mb-3 text-gray-500">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <a href="" className="underline">Read more</a>
                    </div>
                    <div className="flex flex-col justify-between mt-12 space-y-5 lg:w-7/12 lg:space-y-0 lg:mt-0">
                        <div className="flex space-x-5">
                            <div className="w-4/12">
                                <div className="relative">
                                    <img className="w-full rounded-xl" src="img/children-laptop.png" />
                                    <span className="absolute hidden px-4 py-px text-sm font-semibold bg-yellow-300 rounded-full bottom-2 right-2 text-darken sm:block">PRESS RELEASE</span>
                                </div>
                            </div>
                            <div className="w-8/12">
                                <h1 className="text-sm font-semibold text-gray-800 sm:text-lg">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h1>
                                <p className="my-2 text-xs text-gray-500 sm:my-4 sm:text-md">Class Technologies Inc., the company that created Class,...</p>
                            </div>
                        </div>
                        <div className="flex space-x-5">
                            <div className="w-4/12">
                                <div className="relative">
                                    <img className="w-full rounded-xl" src="img/girl-laptop.png" />
                                    <span className="absolute hidden px-4 py-px text-sm font-semibold bg-yellow-300 rounded-full bottom-2 right-2 text-darken sm:block">NEWS</span>
                                </div>
                            </div>
                            <div className="w-8/12">
                                <h1 className="text-sm font-semibold text-gray-800 sm:text-lg">Zoom’s earliest investors are betting millions on a better Zoom for schools</h1>
                                <p className="my-2 text-xs text-gray-500 sm:my-4 sm:text-md">Zoom was never created to be a consumer product. Nonetheless, the...</p>
                            </div>
                        </div>
                        <div className="flex space-x-5">
                            <div className="w-4/12">
                                <div className="relative">
                                    <img className="w-full rounded-xl" src="img/cat-laptop.png" />
                                    <span className="absolute hidden px-4 py-px text-sm font-semibold bg-yellow-300 rounded-full bottom-2 right-2 text-darken sm:block">NEWS</span>
                                </div>
                            </div>
                            <div className="w-8/12">
                                <h1 className="text-sm font-semibold text-gray-800 sm:text-lg">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h1>
                                <p className="my-2 text-xs text-gray-500 sm:my-4 sm:text-md">This year, investors have reaped big financial returns from betting on Zoom...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TwoDivsBc;
