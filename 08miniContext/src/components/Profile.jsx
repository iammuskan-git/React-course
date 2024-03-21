import React , { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {

    const { user } = useContext(UserContext);

    // getting data from the UserContextProvider
    if(!user) return <div>Please login first beacuse data is not in global variable userContextProvider</div>
    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}

export default Profile;
