import { getSession } from "next-auth/react";
import { errorHandler } from "../../service_backend/utils/errorHandler";
import { apiCallsHandler } from "../../service_frontend/utils/apiCallsHandler";
import getDate from "../../service_frontend/utils/getDate";
import Link from "next/link";

export const getServerSideProps = async (ctx) => {

    try {

        const session = await getSession({ req: ctx.req });

        if (session) {
            const { id } = session.token;
            const userData = await apiCallsHandler('/user/profile-posts', 'POST', { id });

            return {
                props: {
                    userPosts: userData?.data,
                    userData: session.token
                }
            }
        }


    } catch (error) {
        errorHandler(error);
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }
}


export default function UserProfilePage({ userData, userPosts }) {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container flex flex-wrap px-5 pt-16 mx-auto">
                    <div className="flex flex-col w-full mb-20 text-center">
                        <h1 className="text-2xl font-medium text-white sm:text-3xl title-font">{userData?.name}</h1>
                        <h2 className="my-2 font-medium tracking-widest text-indigo-400 text-s title-font">{userData?.email}</h2>
                        <div className="flex justify-center">
                            <div className="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col mb-8">
                        <h1 className="text-2xl font-medium text-white sm:text-3xl title-font">{userData?.name}'s Posts</h1>
                        <div className="h-1 overflow-hidden bg-gray-800 rounded">
                            <div className="h-full bg-indigo-500 w-30"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center -m-4">
                        {userPosts?.map(userPost => (
                            <div className="p-4 md:w-1/3 h-fit">
                                <div className="h-full overflow-hidden border-2 border-gray-800 rounded-lg">
                                    <img className="object-cover object-center w-full lg:h-48 md:h-36" src="https://numan-dev.web.app/images/projects/novies.png" alt="blog" />
                                    <div className="p-6">
                                        <span className="inline-flex items-center justify-center px-2 py-1 font-semibold leading-none text-white bg-teal-500 rounded title-font ">{userPost?.topic}</span>

                                        <h1 className="mb-3 text-lg font-medium text-white title-font n-text-ellipsis-2">{userPost.title}</h1>
                                        <p className="mb-3 leading-relaxed n-text-ellipsis-3">
                                            {userPost.description}
                                        </p>
                                        <div className="flex flex-wrap items-center items-baseline">

                                            <Link href={`/post/${userPost._id}/${userPost?.slug}`} className="inline-flex items-center mt-4 text-indigo-400">Read More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>

                                            <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-500 border-r-2 border-gray-800 lg:ml-auto md:ml-0">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="inline-flex items-center text-sm leading-none text-gray-500">
                                                <span className="mt-1 text-sm text-gray-500">
                                                    {getDate(userPost?.createdAt)}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
