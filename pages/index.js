import { useEffect } from "react";
import { useStore } from "../service_frontend/store";
import Loader from "../service_frontend/components/SharedComponent.js/Loader";
import { checkRouteProtected } from "../service_frontend/utils/checkRouteProtected";
import { useRouter } from "next/router";
import NewsCard from "../service_frontend/components/News/NewsCard";
import { apiCallsHandler } from "../service_frontend/utils/apiCallsHandler";
import errorHandler from "../service_frontend/utils/errorHandler";

export default function Home({ posts, hasError }) {
    const [state, dispatch] = useStore();
    const { push, replace } = useRouter();

    useEffect(() => {
        if (!state.user.authenticating) {
            checkRouteProtected({ state, dispatch, replace });
        }
    }, [state.user.authenticated]);

    if (state.user.authenticating) {
        return (
            <Loader />
        );
    }

    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-800">
                        {posts.map((newsData, index) => (
                            <NewsCard
                                key={index}
                                newsData={newsData}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export const getStaticProps = async (ctx) => {
    const posts = await apiCallsHandler('/post');
    return {
        props: {
            posts: posts?.data,
            hasError: posts?.hasError
        },
        revalidate: 5 * 60 * 60
    }
} 