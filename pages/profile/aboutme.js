import { useEffect, useState } from 'react';

const AboutMe = () => {
    const [profileData, setProfileData] = useState(null);
    const [isProfileDataLoading, setIsProfileDataLoading] = useState(true);

    const fetchMyProfile = async () => {
        const profileDataRaw = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
        const profileData = await profileDataRaw.json();
        setProfileData(profileData);
        setIsProfileDataLoading(false);
    }

    useEffect(() => {
        fetchMyProfile();
    }, []);

    if (isProfileDataLoading) return <p>Loading...</p>
    if (!profileData) return <p>No profile data</p>

    return (
        <>
            <div className="text-white">
                <h3>My Profile Data:--</h3>

                <p>Name: {profileData?.name}</p>
                <p>Email: {profileData?.email}</p>
            </div>
        </>
    );
}

export default AboutMe;