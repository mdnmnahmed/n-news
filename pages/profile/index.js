import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Profile = () => {

    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users/1', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div className="text-white">
            <h1>Name: {data?.name}</h1>
            <p>Email: {data?.email}</p>
        </div>
    )
}

export default Profile;
