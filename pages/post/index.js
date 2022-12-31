
export const getStaticProps = async () => {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const postData = await post.json();

    return {
        props: {
            postData
        }
    }
}

const Post = ({ postData }) => {
    return (
        <div className="text-white">
            <h1>Title: {postData?.title}</h1>
            <p>Data:  {postData?.body}</p>
        </div>
    );
}

export default Post;