import React, { useEffect, useState } from 'react';
import '../App.css';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser)
        {
            fetch(`https://dummyjson.com/users/${storedUser.id}`)
                .then(res => res.json())
                .then(data => setUser(data))
                .catch(err => console.error('Error fetching user data:', err));
        }
    }, []);

    if(!user)
    {
        return <p>Loading...</p>;
    }

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;