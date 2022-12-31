import { useRouter } from "next/router";

export const getStaticPaths = () => {
    return {
        paths: [
            {
                params: {
                    postId: '4'
                }
            },
            {
                params: {
                    postId: '6'
                }
            }
        ],
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const postData = await post.json();

    return {
        props: {
            postData
        },
        revalidate: 120       // time (sec) after data fetched static file generated on server
    }
}

const Post = ({ postData }) => {

    const router = useRouter();

    if (router.isFallback) {
        return (
            <div align="center">
                <h3>Loading..</h3>
            </div>
        )
    }

    return (
        <div className="text-white">
            <h1>Title: {postData?.title}</h1>
            <p>Data:  {postData?.body}</p>
        </div>
    );
}

export default Post;