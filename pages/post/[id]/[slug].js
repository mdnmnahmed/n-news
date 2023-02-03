import React, { useEffect } from 'react';
import { apiCallsHandler } from '../../../service_frontend/utils/apiCallsHandler';
import errorHandler from '../../../service_frontend/utils/errorHandler';
import getDate from '../../../service_frontend/utils/getDate';
import { useRouter } from 'next/router';

export const getServerSideProps = async ({ query }) => {

    try {
        const getSpecificPost = await apiCallsHandler(`/post/${query.id}`);
        console.log('getSpecificPost', getSpecificPost);
        return {
            props: {
                post: getSpecificPost.data
            }
        }
    } catch (error) {
        errorHandler(error);
    }

    return {
        props: {
            post: {}
        }
    }
}

const PostDetailsPage = ({ post }) => {
    const { push } = useRouter();

    useEffect(() => {
        if (Object.keys(post).length === 0) {
            push('/');
        }
    }, []);

    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg h-64 overflow-hidden">
                            <div class="mb-6 flex-shrink-0 flex flex-col w-full">
                                <img width="100%" src="https://numan-dev.web.app/images/projects/novies.png" />
                            </div>
                        </div>

                        <div class="mt-12">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                                {post?.title}
                            </h1>
                        </div>

                        <div class="flex flex-col sm:flex-row">
                            <div class="mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <div class="leading-relaxed text-lg mb-4" dangerouslySetInnerHTML={{ __html: post?.description }} />
                            </div>
                        </div>

                        <div class="border-b-2 border-gray-800"></div>
                        <div class="mt-4">
                            <div className="flex justify-between m-4 mb-0">
                                <span class="font-semibold title-font text-white inline-flex items-center justify-center px-6 py-1 leading-none bg-teal-500 rounded ">{post?.topic}</span>
                                <span class="mt-1 text-gray-500 text-sm">
                                    {getDate(post?.createdAt)} {` `}
                                    by {post?.postBy?.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PostDetailsPage;

