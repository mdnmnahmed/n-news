export const getServerSideProps = async ({ query }) => {
    const userDataRaw = await fetch(`https://jsonplaceholder.typicode.com/users/${query.userId}`);
    const userData = await userDataRaw.json();

    return {
        props: {
            userData,
            query
        }
    }
}


const Profile = ({ userData, query }) => {

    if (!Object.keys(userData).length) {
        return (
            <div align="center" className="text-red-600">
                <h3>Invalid User</h3>
                <p>No User Found with this id - {query?.userId}</p>
            </div>
        )
    }

    return (
        <div className="text-white">
            <b>User Profile---</b>
            <p>Name: {userData?.name}</p>
            <p>Email: {userData?.email}</p>
            <p>City: {userData?.address?.city}</p>
        </div>
    );
}

export default Profile;
